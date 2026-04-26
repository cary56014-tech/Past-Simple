import { useState } from 'react';
import { EXERCISES } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function InteractiveExercises() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [feedback, setFeedback] = useState<{ [key: number]: boolean | null }>({});

  const handleCheck = (id: number, answer: string, correct: string) => {
    const isCorrect = answer.toLowerCase().trim() === correct.toLowerCase();
    setFeedback({ ...feedback, [id]: isCorrect });
    setAnswers({ ...answers, [id]: answer });
  };

  return (
    <div className="space-y-12 max-w-4xl mx-auto py-10">
      <div className="space-y-24">
        {EXERCISES.map((ex, index) => (
          <motion.div 
            key={ex.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="editorial-grid items-start"
          >
            <div className="col-span-12 md:col-span-1 flex flex-col gap-2">
              <span className="font-heading text-4xl font-black text-brand-silver">#{index + 1}</span>
              <div className="h-px w-full bg-brand-gray" />
            </div>

            <div className="col-span-12 md:col-span-11 space-y-8 pl-0 md:pl-8">
              <p className="text-2xl font-heading font-bold text-brand-dark leading-tight max-w-2xl">
                {ex.question}
              </p>

              {ex.type === 'choice' ? (
                <div className="flex flex-wrap gap-4">
                  {ex.options?.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleCheck(ex.id, opt, ex.correct)}
                      className={cn(
                        "btn-editorial",
                        answers[ex.id] === opt 
                          ? (feedback[ex.id] ? "bg-brand-dark text-white border-brand-dark" : "bg-brand-medium text-white border-brand-medium")
                          : "bg-transparent"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      placeholder="Type the past form..."
                      className="w-full px-0 py-2 border-b border-brand-gray bg-transparent focus:outline-none focus:border-brand-dark font-heading font-bold text-lg transition-all placeholder:text-brand-silver text-brand-dark uppercase tracking-tight"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleCheck(ex.id, (e.target as HTMLInputElement).value, ex.correct);
                        }
                      }}
                    />
                    <div className="absolute right-0 bottom-4">
                       <span className="editorial-label text-[8px] opacity-40">Press Enter</span>
                    </div>
                  </div>
                  <button 
                    className="btn-editorial bg-brand-dark text-white px-12"
                    onClick={(e) => {
                       const input = (e.currentTarget.previousSibling?.firstChild as HTMLInputElement);
                       handleCheck(ex.id, input.value, ex.correct);
                    }}
                  >
                    Submit
                  </button>
                </div>
              )}

              <AnimatePresence>
                {feedback[ex.id] !== undefined && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={cn(
                      "text-[10px] uppercase tracking-[0.3em] font-bold pb-2",
                      feedback[ex.id] ? "text-brand-deep border-b border-brand-dark inline-block" : "text-brand-silver line-through inline-block"
                    )}
                  >
                    {feedback[ex.id] ? "Verification: Accepted" : "Verification: Error Detected"}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
