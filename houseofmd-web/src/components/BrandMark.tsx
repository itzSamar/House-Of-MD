import logo from '../assets/logo-full.jpg'

export function BrandMark() {
  return (
    <span className="inline-flex items-center gap-3">
      <img
        src={logo}
        alt="House of MD"
        className="h-10 w-auto rounded-md"
        loading="eager"
        decoding="async"
      />
      <span className="hidden leading-none sm:block">
        <span className="block text-sm font-semibold tracking-[0.22em] text-neutral-100">
          HOUSE OF MD
        </span>
        <span className="block text-[11px] tracking-[0.22em] text-neutral-400">
          Couture • Festive • Fusion
        </span>
      </span>
    </span>
  )
}

