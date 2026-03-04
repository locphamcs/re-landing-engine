// Server Component – CHÍNH SÁCH BÁN HÀNG (Sales policy)
import { CreditCard, Landmark, Percent } from "lucide-react"
import type { Project } from "@/lib/projects/types"

const GOLD = "#C7A15A"

const cards: Array<{
  icon: typeof CreditCard
  title: string
  items: Array<{ text: string; highlight?: string }>
}> = [
  {
    icon: CreditCard,
    title: "Thanh toán linh hoạt",
    items: [
      { text: "5% mỗi đợt", highlight: "5%" },
      { text: "20% ký HĐMB", highlight: "20%" },
      { text: "Trước bàn giao ~45%", highlight: "~45%" },
    ],
  },
  {
    icon: Landmark,
    title: "Hỗ trợ tài chính",
    items: [
      { text: "Không hỗ trợ lãi suất" },
      { text: "Ưu tiên vay ngân hàng VCB" },
    ],
  },
  {
    icon: Percent,
    title: "Chiết khấu thanh toán sớm",
    items: [
      { text: "Thanh toán 50%", highlight: "50%" },
      { text: "Chiết khấu ~3% (trước VAT)", highlight: "~3%" },
    ],
  },
]

function BulletItem({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight) {
    return <span>{text}</span>
  }
  const idx = text.indexOf(highlight)
  if (idx === -1) return <span>{text}</span>
  return (
    <span>
      {text.slice(0, idx)}
      <span className="font-semibold text-foreground">{highlight}</span>
      {text.slice(idx + highlight.length)}
    </span>
  )
}

interface SalesPolicyProps {
  project: Project
}

export function SalesPolicy({ project }: SalesPolicyProps) {
  return (
    <section id="sales-policy" className="py-28 bg-card">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section header – centered */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.35em] uppercase mb-3"
            style={{ color: GOLD }}
          >
            CHÍNH SÁCH BÁN HÀNG
          </p>
          <h2 className="font-heading text-4xl font-light text-foreground">
            Chính sách bán hàng
          </h2>
          <div
            className="h-px w-12 mx-auto mt-4"
            style={{ backgroundColor: GOLD }}
          />
        </div>

        {/* 3-column cards – luxury brochure style */}
        <div className="grid md:grid-cols-3 gap-12">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="
                  flex flex-col rounded-2xl overflow-hidden
                  bg-white border border-neutral-200 shadow-sm
                  border-t-2
                "
                style={{ borderTopColor: GOLD }}
              >
                <div className="p-8 flex flex-col flex-1">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center border shrink-0 mb-6"
                    style={{ borderColor: `${GOLD}40` }}
                  >
                    <Icon className="size-5 stroke-[1.5]" style={{ color: GOLD }} />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-foreground mb-5">
                    {card.title}
                  </h3>
                  <ul className="space-y-3 text-neutral-700 text-sm font-light mt-auto">
                    {card.items.map((item) => (
                      <li
                        key={item.text}
                        className="flex items-start gap-2.5"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: GOLD }}
                        />
                        <BulletItem text={item.text} highlight={item.highlight} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
