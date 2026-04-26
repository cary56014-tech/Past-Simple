import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, User, Clock, Heart } from 'lucide-react';
import { cn } from '../lib/utils';

interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
}

export default function BlogSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('past_simple_comments');
    if (saved) {
      setComments(JSON.parse(saved));
    } else {
      const initial = [
        { id: '1', author: 'Linguist Emma', text: 'The irregular verbs are definitely the most challenging part! The logic of the grammar structure helps a lot.', date: '2 hours ago' },
        { id: '2', author: 'Mark J.', text: 'I finally understood the rules for negative sentences. Practical exercises are great.', date: '1 day ago' },
      ];
      setComments(initial);
      localStorage.setItem('past_simple_comments', JSON.stringify(initial));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      author,
      text,
      date: 'Just now',
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem('past_simple_comments', JSON.stringify(updated));
    setAuthor('');
    setText('');
  };

  return (
    <div className="space-y-16">
      <header className="text-center space-y-4">
        <span className="editorial-label">Community Dialogue</span>
        <p className="text-xs uppercase tracking-widest text-brand-medium font-bold">Exchange insights and collective knowledge</p>
      </header>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* Comment Form */}
        <div className="md:col-span-5 space-y-8">
          <div className="bg-brand-gray/10 rounded-[2rem] p-8 border border-brand-gray space-y-8">
            <h3 className="text-xl font-sans font-bold uppercase tracking-tight">Post Entry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="editorial-label text-brand-medium">Author Name</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="ID Number or Alias..."
                  className="w-full px-0 py-3 border-b border-brand-gray bg-transparent focus:outline-none focus:border-brand-dark transition-colors font-sans font-medium text-lg placeholder:text-brand-silver"
                />
              </div>
              <div className="space-y-2">
                <label className="editorial-label text-brand-medium">Manifesto</label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Record your findings..."
                  rows={4}
                  className="w-full px-4 py-4 border border-brand-gray bg-white rounded-3xl focus:outline-none focus:border-brand-dark transition-colors text-sm font-normal leading-relaxed resize-none font-sans"
                />
              </div>
              <button
                type="submit"
                className="btn-editorial w-full bg-brand-dark text-white py-5 flex items-center justify-center gap-3"
              >
                Broadcast Entry <Send size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Comment List */}
        <div className="md:col-span-7 space-y-10">
          <div className="flex justify-between items-center border-b border-brand-gray pb-6">
            <h3 className="text-xl font-sans font-bold uppercase tracking-tight">Broadcast History</h3>
            <span className="editorial-label text-brand-medium">{comments.length} Signals</span>
          </div>
          
          <div className="space-y-8">
            <AnimatePresence initial={false}>
              {comments.map((comment) => (
                <motion.article
                  key={comment.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-3xl p-8 border border-brand-gray space-y-6 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-white font-sans font-bold text-xs uppercase">
                        {comment.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-sans font-bold uppercase text-xs tracking-widest">{comment.author}</h4>
                        <p className="text-[10px] text-brand-medium uppercase font-bold">{comment.date}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-brand-dark font-sans font-medium text-lg leading-relaxed tracking-tight">
                    "{comment.text}"
                  </p>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
