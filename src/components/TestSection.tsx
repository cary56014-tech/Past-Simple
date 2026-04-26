import { useState } from 'react';
import { TEST_QUESTIONS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, RefreshCcw } from 'lucide-react';
import { cn } from '../lib/utils';

export default function TestSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === TEST_QUESTIONS[currentStep].correct;
    if (isCorrect) setScore(score + 1);
    
    const newUserAnswers = [...userAnswers, answer];
    setUserAnswers(newUserAnswers);

    if (currentStep < TEST_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setCurrentStep(0);
    setScore(0);
    setShowResult(false);
    setUserAnswers([]);
  };

  return (
    <div className="space-y-16">
      <header className="text-center space-y-4">
        <span className="editorial-label">Evaluation</span>
        <div className="h-px w-24 bg-brand-dark mx-auto mt-4" />
      </header>

      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="test-step"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-brand-gray/10 rounded-[2rem] border border-brand-gray p-12 md:p-20 space-y-12 relative"
            >
              <div className="flex justify-between items-center">
                <span className="editorial-label">Question {currentStep + 1} / {TEST_QUESTIONS.length}</span>
                <div className="flex gap-1.5">
                   {TEST_QUESTIONS.map((_, i) => (
                      <div key={i} className={cn("w-1.5 h-1.5 rounded-full transition-all duration-500", i <= currentStep ? "bg-brand-dark scale-125" : "bg-brand-gray")} />
                   ))}
                </div>
              </div>

              <h3 className="text-3xl font-heading font-bold text-brand-dark leading-tight tracking-tight text-center">
                "{TEST_QUESTIONS[currentStep].question}"
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {TEST_QUESTIONS[currentStep].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="btn-editorial w-full py-6 text-center text-xs md:text-sm tracking-[0.2em]"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result-view"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-12 py-20 px-10 border border-brand-dark rounded-[3rem] bg-white"
            >
              <div className="space-y-6">
                <span className="editorial-label">Assessment Result</span>
                <div className="text-[10rem] md:text-[14rem] font-heading font-black tracking-tighter leading-none text-brand-dark">
                  {score}<span className="text-brand-silver font-black text-6xl">/{TEST_QUESTIONS.length}</span>
                </div>
              </div>

              <div className="max-w-xs mx-auto space-y-8">
                <p className="text-brand-medium font-bold uppercase tracking-widest text-[10px] leading-relaxed">
                  {score === TEST_QUESTIONS.length 
                    ? "Absolute mastery achieved."
                    : score >= 7 
                      ? "High operational proficiency."
                      : "Developing fundamental structures."}
                </p>
                
                <button
                  onClick={resetTest}
                  className="btn-editorial bg-brand-dark text-white w-full py-6"
                >
                  Restart Assessment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
