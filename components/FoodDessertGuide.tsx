'use client';

import { useState } from 'react';
import { Utensils } from 'lucide-react';
import { logFunctionCall } from '@/lib/logger';
import { filterFoodSpots } from '@/data/food-desserts';
import { CityId, FoodCategory } from '@/types/travel';

const CITY_FILTER_TABS: { id: CityId | 'all'; label: string }[] = [
  { id: 'all', label: 'London & Paris' },
  { id: CityId.LONDON, label: 'London' },
  { id: CityId.PARIS, label: 'Central Paris' },
];

const FOOD_TABS: { id: FoodCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Stops' },
  { id: FoodCategory.COMFORT_PASTA_PIZZA, label: 'Pasta & Pizza' },
  { id: FoodCategory.ASIAN_NOODLES, label: 'Asian & Ramen' },
  { id: FoodCategory.FISH_AND_CHIPS, label: 'Fish & Chips' },
  { id: FoodCategory.VISUAL_DESSERT, label: 'Desserts & Gelato' },
  { id: FoodCategory.STREET_MARKET, label: 'Markets' },
];

export default function FoodDessertGuide() {
  const [selectedCity, setSelectedCity] = useState<CityId | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory | 'all'>('all');
  const visibleSpots = filterFoodSpots(selectedCategory, selectedCity);

  const handleCityChange = (nextCity: CityId | 'all') => {
    logFunctionCall('changeFoodDessertCity', { nextCity });
    setSelectedCity(nextCity);
  };

  const handleCategoryChange = (nextCategory: FoodCategory | 'all') => {
    logFunctionCall('changeFoodDessertCategory', { nextCategory });
    setSelectedCategory(nextCategory);
  };

  return (
    <section id="food-desserts" className="py-16 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-[#57534E]">
              05. Teen-Approved Dining &amp; Visual Desserts
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[#1C1917] [text-wrap:balance]">
              Comfort Pasta, Ramen Districts, Fish &amp; Chips &amp; Artisan Gelato
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#44403C]">
              Every major museum block pairs directly with nearby street-food halls, London fish and
              chips, Paris’s Rue Sainte-Anne ramen quarter, lively pasta/pizza trattorias, and
              hyper-visual desserts from Chin Chin Labs and Milk Train to Amorino, Bachir, and
              Cédric Grolet.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter food and dessert spots by city"
            className="inline-flex items-center gap-1 p-1 bg-[#EBE6DF] rounded-lg self-start lg:self-auto"
          >
            {CITY_FILTER_TABS.map((tab) => {
              const isSelected = selectedCity === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleCityChange(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-[#1E3A8A] text-white'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6">
          <div
            role="tablist"
            aria-label="Filter food and dessert spots by category"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EBE6DF] rounded-lg"
          >
            {FOOD_TABS.map((tab) => {
              const isSelected = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleCategoryChange(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {visibleSpots.length === 0 ? (
          <div className="mt-8 p-8 bg-[#F3EFE6]/50 border border-stone-200 rounded-md text-center">
            <p className="text-sm font-medium text-[#1C1917]">
              No stops match that exact city and category combination.
            </p>
            <button
              type="button"
              onClick={() => {
                handleCityChange('all');
                handleCategoryChange('all');
              }}
              className="mt-3 px-4 py-2 text-xs font-semibold text-white bg-[#1E3A8A] rounded-md cursor-pointer"
            >
              Show All London &amp; Paris Stops
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleSpots.map((spot) => (
              <article
                key={spot.id}
                className="p-6 bg-[#F3EFE6]/55 border border-stone-200 rounded-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-[#57534E]">
                    <span>
                      {spot.cityLabel} · {spot.categoryLabel}
                    </span>
                    <span className="font-mono-num font-semibold text-[#1E3A8A] shrink-0">
                      Day {String(spot.pairedDay).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-2 font-display text-xl font-semibold text-[#1C1917]">
                    {spot.name}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-[#57534E]">{spot.neighborhood}</p>

                  <div className="mt-4 pt-3 border-t border-stone-200 text-sm">
                    <div className="flex items-start gap-2 text-[#1C1917]">
                      <Utensils
                        className="w-3.5 h-3.5 text-[#78350F] shrink-0 mt-1"
                        aria-hidden="true"
                      />
                      <span className="font-medium leading-snug">{spot.signatureOrder}</span>
                    </div>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#44403C]">
                      {spot.teenAppeal}
                    </p>
                  </div>
                </div>

                <p className="mt-4 pt-3 border-t border-stone-200 text-xs leading-relaxed text-[#57534E]">
                  Logistics: {spot.practicalTip}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
