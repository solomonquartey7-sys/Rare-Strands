import { lengthsAvailable } from '../config'

const ITEMS = [
  '100% Raw & Virgin Hair',
  `Lengths ${lengthsAvailable}`,
  'Reusable With Proper Care',
  'Bundles · Closures · Frontals',
  'Salon Services Available',
]

export default function Marquee() {
  // Duplicated once so the 50%-width keyframe loops seamlessly.
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
