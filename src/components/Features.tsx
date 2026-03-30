import { useTranslation } from 'react-i18next'

// MKT-WEBSITE-HOME-0001
// Fix v3: Headline is rendered in its OWN div ABOVE the circle wrapper.
// The circle wrapper has explicit paddingTop so Card A (top: 0%, translate -50%)
// has physical space above it and can never reach the headline.
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

  const loopCards = [
    { id: 'A', key: 'cardA', tag: t('features.loopA_tag') },
    { id: 'B', key: 'cardB', tag: t('features.loopB_tag') },
    { id: 'C', key: 'cardC', tag: t('features.loopC_tag') },
    { id: 'D', key: 'cardD', tag: t('features.loopD_tag') },
    { id: 'E', key: 'cardE', tag: t('features.loopE_tag') },
    { id: 'F', key: 'cardF', tag: t('features.loopF_tag') },
    { id: 'G', key: 'cardG', tag: t('features.loopG_tag') },
    { id: 'H', key: 'cardH', tag: t('features.loopH_tag') },
  ]

  // Card dimensions
  const CARD_W = 148
  const CARD_H = 180 // approximate max card height in px — used for paddingTop calculation

  // 8 positions on a 720×720 circle.
  // Cards are centred on their anchor via translate(-50%, -50%).
  // G (left) inset to left:4%, C (right) inset to left:96% — prevents clip.
  const positions: React.CSSProperties[] = [
    { top: '0%',    left: '50%',   transform: 'translate(-50%, -50%)' }, // A top
    { top: '14.6%', left: '85.4%', transform: 'translate(-50%, -50%)' }, // B top-right
    { top: '50%',   left: '96%',   transform: 'translate(-50%, -50%)' }, // C right
    { top: '85.4%', left: '85.4%', transform: 'translate(-50%, -50%)' }, // D bottom-right
    { top: '100%',  left: '50%',   transform: 'translate(-50%, -50%)' }, // E bottom
    { top: '85.4%', left: '14.6%', transform: 'translate(-50%, -50%)' }, // F bottom-left
    { top: '50%',   left: '4%',    transform: 'translate(-50%, -50%)' }, // G left
    { top: '14.6%', left: '14.6%', transform: 'translate(-50%, -50%)' }, // H top-left
  ]

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
          SECTION 3 — CIRCULAR LOOP A–H
      ══════════════════════════════════════ */}
      <div className="bg-surface">

        {/* ── HEADLINE — its own block, fully outside the circle container ── */}
        <div className="text-center pt-20 pb-0 px-4">
          <h2 className="heading-lg text-primary">
            {t('features.loopHeadline')}
          </h2>
        </div>

        {/* ── DESKTOP CIRCULAR LAYOUT (lg+) ── */}
        <div className="hidden lg:flex justify-center overflow-hidden">
          {/*
            Outer wrapper: 920px wide so cards at the left/right edges
            (G at left:4%, C at left:96%) have room without clipping.

            paddingTop: CARD_H + 20px — this is the KEY fix.
            Card A anchors at top:0% of the 720px circle and translates
            up by 50% of its own height (~90px). The paddingTop pushes
            the circle DOWN inside this wrapper so Card A's top edge
            sits below the headline above it.

            paddingBottom: same logic for Card E at the bottom.
          */}
          <div
            style={{
              width: '920px',
              paddingTop: `${CARD_H + 20}px`,
              paddingBottom: `${CARD_H + 40}px`,
            }}
          >
            {/* 720×720 circle — centred in outer wrapper */}
            <div
              className="relative mx-auto"
              style={{ width: '720px', height: '720px' }}
            >
              {/* Orbit ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-accent/20"
                style={{ animation: 'spin 40s linear infinite' }}
              />
              {/* Inner ring */}
              <div
                className="absolute rounded-full border border-accent/10"
                style={{
                  top: '8%', left: '8%', right: '8%', bottom: '8%',
                  animation: 'spin 60s linear infinite reverse',
                }}
              />

              {/* Center orb */}
              <div
                className="absolute"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div
                  className="w-44 h-44 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-2xl"
                  style={{ animation: 'glow 2s ease-in-out infinite alternate' }}
                >
                  <span className="text-white font-display font-bold text-xl text-center leading-tight px-4">
                    {t('features.loopCenter')}
                  </span>
                </div>
              </div>

              {/* Cards A–H */}
              {loopCards.map((card, index) => (
                <div
                  key={card.id}
                  className="absolute"
                  style={{ ...positions[index], width: `${CARD_W}px` }}
                >
                  <div
                    className="bg-white rounded-2xl border-2 border-gray-100 hover:border-accent hover:shadow-xl transition-all duration-300 p-4 cursor-default"
                    style={{ animation: `fadeIn 0.6s ease-out ${index * 0.1}s both` }}
                  >
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {card.id}
                      </span>
                      {card.tag && (
                        <span className="text-xs font-semibold text-accent/80 uppercase tracking-wide">
                          {card.tag}
                        </span>
                      )}
                    </div>
                    <div className="space-y-1">
                      {(t(`features.${card.key}Lines`, { returnObjects: true }) as string[]).map(
                        (line: string, i: number) => (
                          <p
                            key={i}
                            className={
                              i === 0
                                ? 'text-xs font-display font-bold text-primary leading-snug'
                                : 'text-xs text-gray-500 leading-relaxed'
                            }
                          >
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}

            </div>{/* end 720×720 */}
          </div>{/* end outer wrapper */}
        </div>{/* end desktop */}

        {/* ── MOBILE / TABLET GRID (< lg) ── */}
        <div className="lg:hidden px-4 pb-20">
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mt-12">
            {loopCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl border-2 border-gray-100 hover:border-accent hover:shadow-lg transition-all duration-300 p-6"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {card.id}
                  </span>
                  {card.tag && (
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                      {card.tag}
                    </span>
                  )}
                </div>
                <div className="space-y-1">
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
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-accent to-accent-dark shadow-2xl">
              <span className="text-white font-display font-bold text-lg text-center leading-tight px-3">
                {t('features.loopCenter')}
              </span>
            </div>
          </div>
        </div>

      </div>{/* end bg-surface */}

    </div>
  )
}
