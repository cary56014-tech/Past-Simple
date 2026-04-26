import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PAST_SIMPLE_VERBS, IDENTIFICATION_EXERCISES } from '../constants';
import { cn } from '../lib/utils';
import { RefreshCw, CheckCircle2, XCircle } from 'lucide-react';

interface Card {
  id: string;
  label: string;
  type: 'present' | 'past';
  matchId: string;
}

export default function PracticeGame() {
  const [gameMode, setGameMode] = useState<'id' | 'match'>('id');
  
  // Matching Game State
  const [cards, setCards] = useState<Card[]>([]);
  const [selected, setSelected] = useState<Card[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [matchScore, setMatchScore] = useState(0);

  // Identification Game State
  const [idStep, setIdStep] = useState(0);
  const [idFeedback, setIdFeedback] = useState<boolean | null>(null);
  const [idScore, setIdScore] = useState(0);
  const [idFinished, setIdFinished] = useState(false);

  const initMatchGame = () => {
    // Select 10 random verbs
    const shuffled = [...PAST_SIMPLE_VERBS].sort(() => 0.5 - Math.random());
    const selectedVerbs = shuffled.slice(0, 5);
    
    const gameCards: Card[] = [];
    selectedVerbs.forEach((v) => {
      gameCards.push({ id: `present-${v.infinitive}`, label: v.infinitive, type: 'present', matchId: v.infinitive });
      gameCards.push({ id: `past-${v.infinitive}`, label: v.past, type: 'past', matchId: v.infinitive });
    });

    setCards(gameCards.sort(() => 0.5 - Math.random()));
    setMatched([]);
    setSelected([]);
    setMatchScore(0);
  };

  const initIdGame = () => {
    setIdStep(0);
    setIdFeedback(null);
    setIdScore(0);
    setIdFinished(false);
  };

  useEffect(() => {
    if (gameMode === 'match') initMatchGame();
    else initIdGame();
  }, [gameMode]);

  const handleMatchClick = (card: Card) => {
    if (matched.includes(card.matchId) || selected.some(s => s.id === card.id)) return;
    
    const newSelected = [...selected, card];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      if (newSelected[0].matchId === newSelected[1].matchId && newSelected[0].type !== newSelected[1].type) {
        setMatched([...matched, newSelected[0].matchId]);
        setMatchScore(matchScore + 10);
        setSelected([]);
      } else {
        setTimeout(() => setSelected([]), 1000);
      }
    }
  };

  const handleIdCheck = (type: string) => {
    if (idFeedback !== null) return;
    const isCorrect = type === IDENTIFICATION_EXERCISES[idStep].type;
    setIdFeedback(isCorrect);
    if (isCorrect) setIdScore(idScore + 1);

    setTimeout(() => {
      if (idStep < IDENTIFICATION_EXERCISES.length - 1) {
        setIdStep(idStep + 1);
        setIdFeedback(null);
      } else {
        setIdFinished(true);
      }
    }, 1500);
  };

  return (
    <div className="space-y-16">
      <header className="text-center space-y-8">
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => setGameMode('id')}
            className={cn(
              "btn-editorial",
              gameMode === 'id' ? "bg-brand-dark text-white border-brand-dark" : "bg-transparent"
            )}
          >
            Identify Type
          </button>
          <button 
            onClick={() => setGameMode('match')}
            className={cn(
              "btn-editorial",
              gameMode === 'match' ? "bg-brand-dark text-white border-brand-dark" : "bg-transparent"
            )}
          >
            Verb Matching
          </button>
        </div>
        
        <div className="space-y-4">
          <p className="text-brand-medium text-sm font-bold uppercase tracking-widest">
            {gameMode === 'id' 
              ? 'Select if the sentence is Affirmative, Negative or Interrogative' 
              : 'Pair 5 present forms with their correct past simple forms'}
          </p>
        </div>
      </header>

      {gameMode === 'id' ? (
        <div className="max-w-xl mx-auto bg-white rounded-[2rem] border border-brand-gray p-10 md:p-16 space-y-12">
          {!idFinished ? (
            <>
              <div className="flex justify-between items-center">
                <span className="editorial-label">Question {idStep + 1} / {IDENTIFICATION_EXERCISES.length}</span>
                <span className="editorial-label">Score: {idScore}</span>
              </div>

              <div className="text-center py-8">
                <p className="text-3xl font-heading font-bold tracking-tight text-brand-dark">
                  "{IDENTIFICATION_EXERCISES[idStep].sentence}"
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {['AFFIRMATIVE', 'NEGATIVE', 'INTERROGATIVE'].map((type) => (
                  <button
                    key={type}
                    onClick={() => handleIdCheck(type)}
                    className={cn(
                      "btn-editorial w-full py-5",
                      idFeedback !== null && type === IDENTIFICATION_EXERCISES[idStep].type ? "bg-brand-dark text-white border-brand-dark" : ""
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <AnimatePresence>
                {idFeedback !== null && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "text-center font-bold uppercase tracking-[0.2em] text-[10px]",
                      idFeedback ? "text-brand-dark" : "text-brand-silver"
                    )}
                  >
                    {idFeedback ? "CORRECT EXECUTION" : "LOGICAL ERROR"}
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <div className="text-center space-y-8">
              <h3 className="text-5xl font-heading font-black tracking-tighter uppercase">Finished</h3>
              <p className="text-[12rem] font-black leading-none tracking-tight text-brand-dark/10">{idScore}/{IDENTIFICATION_EXERCISES.length}</p>
              <button onClick={initIdGame} className="btn-editorial bg-brand-dark text-white px-12">Try Again</button>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-12">
          <div className="flex justify-between items-center px-4">
            <div className="editorial-label">Matched: {matched.length} / 5</div>
            <button onClick={initMatchGame} className="editorial-label flex items-center gap-2 hover:text-brand-dark transition-all">
              <RefreshCw size={12} /> Reset System
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {cards.map((card) => {
              const isSelected = selected.some(s => s.id === card.id);
              const isMatched = matched.includes(card.matchId);

              return (
                <motion.button
                  key={card.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleMatchClick(card)}
                  className={cn(
                    "h-32 flex items-center justify-center border transition-all rounded-2xl md:rounded-3xl",
                    isMatched 
                      ? "bg-brand-gray/20 border-transparent text-brand-silver cursor-default" 
                      : isSelected 
                        ? "bg-brand-dark text-white border-brand-dark shadow-xl" 
                        : "bg-white border-brand-gray text-brand-dark hover:border-brand-dark"
                  )}
                >
                   <div className="flex flex-col items-center gap-2">
                    <span className="editorial-label text-[7px] opacity-40">{card.type}</span>
                    <span className="font-heading font-black text-xs md:text-sm uppercase tracking-widest">{card.label}</span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence>
            {matched.length === 5 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-16 bg-white border border-brand-dark rounded-[3rem] shadow-2xl space-y-6"
              >
                <h3 className="text-6xl font-heading font-black tracking-tighter uppercase italic">Victory.</h3>
                <p className="editorial-label">System Match Protocol Complete</p>
                <button onClick={initMatchGame} className="btn-editorial bg-brand-dark text-white px-16 mt-8">Reconfigure</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
