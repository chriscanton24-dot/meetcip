import { useTranslation } from 'react-i18next'

// MKT-WEBSITE-HOME-0001
// Section 3 — Clean card grid replacing circular layout.
// Cards are HORIZONTAL (landscape orientation) matching Section 2 card style.
// Layout: 4 columns × 2 rows = 8 cards (A–H in reading order).
// Center orb "Now you know." sits between row 1 and row 2 as a full-width divider.
// No absolute positioning. No overflow issues. Matches page flow.
export default function Features() {
  const { t } = useTranslation()

  const painCards = [
    { key: 'card1' },
    { key: 'card2', label: t('features.card2Label') },
    { key: 'card3', label: t('features.card3Label') },
    { key: 'card4', label: t('features.card4Label') },
    { key: 'card5', label: t('features.card5Label') },
    { key: 'card6', label: t('features.card6Label') },
  ]

  // Loop cards split into two rows of 4
  const rowOne = [
    { id: 'A', key: 'cardA', tag: t('features.loopA_tag') },
    { id: 'B', key: 'cardB', tag: t('features.loopB_tag') },
    { id: 'C', key: 'cardC', tag: t('features.loopC_tag') },
    { id: 'D', key: 'cardD', tag: t('features.loopD_tag') },
  ]
  const rowTwo = [
    { id: 'E', key: 'cardE', tag: t('features.loopE_tag') },
    { id: 'F', key: 'cardF', tag: t('features.loopF_tag') },
    { id: 'G', key: 'cardG', tag: t('features.loopG_tag') },
    { id: 'H', key: 'cardH', tag: t('features.loopH_tag') },
  ]

  // Reusable horizontal card component
  const LoopCard = ({ card }: { card: typeof rowOne[0] }) => (
    <div className="bg-white rounded-2xl border-2 border-gray-100 hover:border-accent hover:shadow-lg transition-all duration-300 p-6 flex gap-5 items-start">
      {/* Left: ID badge + tag stacked */}
      <div className="flex flex-col items-center gap-2 flex-shrink-0 pt-1">
        <span className="w-9 h-9 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">
          {card.id}
        </span>
        {card.tag && (
          <span className="text-xs font-bold text-accent/80 uppercase tracking-wide whitespace-nowrap">
            {card.tag}
          </span>
        )}
      </div>
      {/* Right: copy lines */}
      <div className="space-y-1 min-w-0">
        {(t(`features.${card.key}Lines`, { returnObjects: true }) as string[]).map(
          (line: string, i: number) => (
            <p
              key={i}
              className={
                i === 0
                  ? 'text-sm font-display font-bold text-primary leading-snug'
                  : 'text-sm text-gray-500 leading-relaxed'
              }
            >
              {line}
            </p>
          )
        )}
      </div>
    </div>
  )

  return (
    <div>

      {/* ══════════════════════════════════════
          SECTION 2 — PAIN NARRATIVE + 6 CARDS
      ══════════════════════════════════════ */}
      <div className="bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-primary mb-6">
              {t('features.painHeadline')}
            </h2>
            <div className="max-w-2xl mx-auto space-y-3 text-xl text-gray-600 leading-relaxed">
              <p>{t('features.painLine1')}</p>
              <p>{t('features.painLine2')}</p>
              <p>{t('features.painLine3')}</p>
              <p className="text-primary font-semibold">{t('features.painLine4')}</p>
              <p className="text-gray-500 italic">{t('features.painLine5')}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {painCards.map((card, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border-2 border-gray-100 hover:border-accent transition-all hover:shadow-lg bg-surface"
              >
                {card.label && (
                  <div className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                    {card.label}
                  </div>
                )}
                <div className="space-y-2">
                  {(t(`features.${card.key}Lines`, { returnObjects: true }) as string[]).map(
                    (line: string, i: number) => (
                      <p
                        key={i}
                        className={
                          i === 0
                            ? 'text-lg font-display font-bold text-primary leading-snug'
                            : 'text-gray-600 leading-relaxed'
                        }
                      >
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          SECTION 3 — CLEAN CARD GRID A–H
      ══════════════════════════════════════ */}
      <div className="bg-surface">
        <div className="section-container">

          {/* Headline */}
          <div className="text-center mb-12">
            <h2 className="heading-lg text-primary">
              {t('features.loopHeadline')}
            </h2>
          </div>

          {/* Row 1 — Cards A B C D */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {rowOne.map(card => <LoopCard key={card.id} card={card} />)}
          </div>

          {/* Center orb divider */}
          <div className="flex items-center gap-6 my-10 max-w-7xl mx-auto">
            <div className="flex-1 h-px bg-accent/20" />
            <div
              className="w-36 h-36 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-2xl flex-shrink-0"
              style={{ animation: 'glow 2s ease-in-out infinite alternate' }}
            >
              <span className="text-white font-display font-bold text-lg text-center leading-tight px-4">
                {t('features.loopCenter')}
              </span>
            </div>
            <div className="flex-1 h-px bg-accent/20" />
          </div>

          {/* Row 2 — Cards E F G H */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {rowTwo.map(card => <LoopCard key={card.id} card={card} />)}
          </div>

        </div>
      </div>

    </div>
  )
}
