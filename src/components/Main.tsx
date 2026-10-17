import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import type { CardItem } from '../scripts/card';
import { addTechnology, clearStack, getStackCountLabel, removeTechnology } from '../scripts/stack';
import Cards from './Cards';

function Main() {
  const [cards, setCards] = useState<CardItem[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');

  useEffect(() => {
    const cardsUrl = new URL('../assets/cards.json', import.meta.url).href;

    fetch(cardsUrl)
      .then((response) => {
        if (!response.ok) throw new Error('Technology data could not be loaded.');
        return response.json() as Promise<CardItem[]>;
      })
      .then(setCards)
      .catch(() => setLoadError('We could not load the technology library. Please refresh and try again.'))
      .finally(() => setLoading(false));
  }, []);

  const selectedCards = useMemo(
    () => selectedIds.map((id) => cards.find((card) => card.id === id)).filter((card): card is CardItem => Boolean(card)),
    [cards, selectedIds],
  );

  const handleAdd = (card: CardItem) => {
    if (selectedIds.includes(card.id)) {
      toast.warn(`${card.name} is already in your stack.`);
      return;
    }
    setSelectedIds((current) => addTechnology(current, card.id));
    toast.success(`${card.name} added to your stack.`);
  };

  const handleRemove = (card: CardItem) => {
    setSelectedIds((current) => removeTechnology(current, card.id));
    toast.info(`${card.name} removed from your stack.`);
  };

  const handleClear = () => {
    if (!selectedIds.length) return;
    setSelectedIds(clearStack());
    toast.info('Your stack has been cleared.');
  };

  return (
    <main id="technologies" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
      <section className="mb-10" id="about">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-600">Your toolkit, your way</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          Explore the <span className="text-brand-gradient">Technologies</span>
        </h2>
        <p className="mt-3 max-w-xl text-slate-500">Pick the tools that match your project and build a stack you can ship with confidence.</p>
      </section>

      {loading && <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500">Loading technology library...</div>}
      {loadError && <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-700">{loadError}</div>}
      {!loading && !loadError && (
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <Cards cards={cards} selectedIds={selectedIds} onAdd={handleAdd} />
          <aside className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold text-slate-950">Your Stack</h2>
                <p className="mt-1 text-sm text-slate-500">{getStackCountLabel(selectedCards.length)}</p>
              </div>
              {selectedCards.length > 0 && <button type="button" onClick={handleClear} className="text-xs font-bold text-pink-600 hover:text-pink-700">Remove All</button>}
            </div>
            {selectedCards.length === 0 ? (
              <div className="mt-8 rounded-xl border border-dashed border-slate-200 px-5 py-8 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-pink-50 text-2xl text-pink-500">+</div>
                <p className="mt-4 text-sm font-semibold text-slate-600">Your stack is empty</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">Add technologies from the library to see them here.</p>
              </div>
            ) : (
              <ul className="mt-6 space-y-3">
                {selectedCards.map((card) => (
                  <li key={card.id} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                    <img src={card.icon} alt="" className="h-9 w-9 rounded-lg bg-white p-1.5" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-slate-800">{card.name}</p>
                      <p className="text-xs text-slate-500">{card.category}</p>
                    </div>
                    <button type="button" onClick={() => handleRemove(card)} aria-label={`Remove ${card.name}`} className="text-lg text-slate-400 hover:text-red-500">×</button>
                  </li>
                ))}
              </ul>
            )}
          </aside>
        </div>
      )}
    </main>
  );
}

export default Main;
