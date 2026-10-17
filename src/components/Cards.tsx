import type { CardItem } from '../scripts/card';

interface CardsProps {
  cards: CardItem[];
  selectedIds: string[];
  onAdd: (card: CardItem) => void;
}

export function Cards({ cards, selectedIds, onAdd }: CardsProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {cards.map((card) => {
        const added = selectedIds.includes(card.id);

        return (
          <article key={card.id} className="flex min-h-80 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
            <div className="flex items-start justify-between gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-50 p-3">
                <img src={card.icon} alt={`${card.name} logo`} className="h-full w-full object-contain" />
              </div>
              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">{card.badge}</span>
            </div>
            <div className="mt-5">
              <h3 className="text-xl font-bold text-slate-950">{card.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{card.description}</p>
            </div>
            <div className="mt-auto flex flex-wrap items-center gap-2 pt-6 text-xs font-semibold">
              <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-indigo-700">{card.category}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-600">{card.difficulty}</span>
              <span className="ml-auto text-sm text-slate-600">★ {card.rating}</span>
            </div>
            <button
              type="button"
              disabled={added}
              onClick={() => onAdd(card)}
              className={`mt-5 w-full rounded-xl px-4 py-3 text-sm font-bold ${added ? 'cursor-not-allowed bg-emerald-50 text-emerald-700' : 'brand-gradient text-white shadow-md shadow-pink-100 hover:-translate-y-0.5'}`}
            >
              {added ? '✓ Added to Stack' : '+ Add to Stack'}
            </button>
          </article>
        );
      })}
    </div>
  );
}

export default Cards;
