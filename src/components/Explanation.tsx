import { PAST_SIMPLE_VERBS } from '../constants';
import { motion } from 'motion/react';

export default function Explanation() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4 select-none pt-8">
        <p className="max-w-2xl mx-auto text-lg text-brand-dark font-medium leading-relaxed">
          The simple past is a verb tense used to talk about actions that already happened and finished in the past.
        </p>
      </section>

      {/* Grammar Structure Section */}
      <section className="space-y-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-lg font-sans font-black uppercase tracking-[0.3em] text-brand-dark/30">Grammar Structure</h2>
          <div className="h-px w-16 bg-brand-gray" />
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-brand-gray shadow-sm group hover:border-brand-dark transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="editorial-label text-[9px]">Positive Statement</span>
                <h3 className="text-base font-sans font-bold uppercase tracking-widest text-brand-dark">AFFIRMATIVE FORM</h3>
              </div>
              <div className="text-center md:text-right space-y-2">
                <p className="text-lg font-heading text-brand-deep tracking-tight">subject + <span className="text-brand-dark font-bold">verb in past tense</span> + complement</p>
                <p className="text-brand-medium text-sm">Example: She played her guitar yesterday</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 border border-brand-gray shadow-sm group hover:border-brand-dark transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="editorial-label text-[9px]">Negative Statement</span>
                <h3 className="text-base font-sans font-bold uppercase tracking-widest text-brand-dark">NEGATIVE FORM</h3>
              </div>
              <div className="text-center md:text-right space-y-2">
                <p className="text-lg font-heading text-brand-deep tracking-tight">subject + <span className="text-brand-dark font-bold">did + not + verb</span> + complement</p>
                <p className="text-brand-medium text-sm">Example: She did not play her guitar yesterday</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 border border-brand-gray shadow-sm group hover:border-brand-dark transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="editorial-label text-[9px]">Questioning</span>
                <h3 className="text-base font-sans font-bold uppercase tracking-widest text-brand-dark">INTERROGATIVE FORM</h3>
              </div>
              <div className="text-center md:text-right space-y-2">
                <p className="text-lg font-heading text-brand-deep tracking-tight"><span className="text-brand-dark font-bold">did</span> + subject + verb + complement?</p>
                <p className="text-brand-medium text-sm">Example: Did she play her guitar yesterday?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <div className="editorial-grid">
        <section className="col-span-12 md:col-span-6 space-y-10 border-t border-brand-gray pt-10">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-heading font-bold uppercase">Regular</h2>
            <span className="editorial-label text-brand-silver">Patterns</span>
          </div>
          <p className="text-brand-medium text-sm leading-relaxed max-w-md uppercase font-bold tracking-wider">
            Standard conjugation protocols.
          </p>
          <ul className="space-y-8 list-none p-0">
            {[
              { id: '01', title: 'Standard Execution', desc: 'Suffix -ed added to the root verb.', eg: 'work → worked' },
              { id: '02', title: 'Terminal E', desc: 'Root ending in -e requires only the -d addition.', eg: 'like → liked' },
              { id: '03', title: 'The Y Transition', desc: 'Y preceded by consonant shifts to i + ed.', eg: 'study → studied' },
            ].map(rule => (
              <li key={rule.id} className="flex items-start gap-6 group">
                <span className="font-heading text-brand-medium text-3xl font-black group-hover:text-brand-dark transition-colors">{rule.id}</span>
                <div className="space-y-1">
                  <p className="editorial-label text-brand-dark">{rule.title}</p>
                  <p className="text-brand-medium text-xs font-medium">{rule.desc}</p>
                  <p className="text-brand-deep text-xs font-bold mt-2 uppercase tracking-widest">{rule.eg}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="col-span-12 md:col-span-6 space-y-10 border-t border-brand-gray pt-10">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-heading font-bold uppercase text-brand-silver">Irregular</h2>
            <span className="editorial-label text-brand-silver">Anomalies</span>
          </div>
          <p className="text-brand-medium text-sm leading-relaxed max-w-md uppercase font-bold tracking-wider">
            Anomalous conjugation protocols.
          </p>
          <div className="bg-brand-gray/30 rounded-3xl p-10 space-y-6">
            <p className="text-brand-dark font-heading text-xl font-bold leading-snug uppercase tracking-tight">
              Irregular verbs do not follow a fixed rule. They change their form completely.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-6 bg-brand-medium" />
              <p className="editorial-label text-brand-dark">Study Required</p>
            </div>
          </div>
        </section>
      </div>

      {/* Table Section */}
      <section className="space-y-12 border-t border-brand-gray pt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="editorial-label">Infinitive - Past Simple</span>
            <h2 className="text-5xl font-heading">Vocabulary List</h2>
          </div>
          <p className="text-brand-medium text-xs max-w-xs text-right">
            A curated inventory of high-frequency verbs critical for professional English communication.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-brand-dark">
                <th className="px-6 py-6 editorial-label text-brand-dark text-[11px]">Verb</th>
                <th className="px-6 py-6 editorial-label text-brand-dark text-[11px]">Past Simple</th>
              </tr>
            </thead>
            <tbody className="text-xs font-semibold uppercase tracking-widest text-brand-dark">
              {PAST_SIMPLE_VERBS.map((verb) => (
                <tr key={verb.infinitive} className="border-b border-brand-gray group hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5">{verb.infinitive}</td>
                  <td className="px-6 py-5">{verb.past}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
