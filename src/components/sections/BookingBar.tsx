"use client";

const fieldClass =
  "w-full appearance-none bg-transparent font-body text-sm text-espresso outline-none placeholder:text-espresso/40";
const labelClass =
  "block font-body text-[10px] font-medium uppercase tracking-[0.16em] text-gold";

/**
 * Gathers stay intent and routes to Contact — there is no live inventory
 * system behind this, so it never simulates an availability check.
 */
export function BookingBar() {
  return (
    <form
      action="/contact"
      method="get"
      className="relative z-20 mx-auto -mt-8 w-full max-w-5xl border border-champagne/50 bg-white shadow-[0_20px_60px_-30px_rgba(51,40,33,0.35)] sm:-mt-10 md:-mt-14"
    >
      <div className="grid grid-cols-2 divide-y divide-champagne/30 sm:grid-cols-4 sm:divide-x sm:divide-y-0 md:grid-cols-5">
        <label className="px-5 py-4 sm:px-6 sm:py-5">
          <span className={labelClass}>Check-in</span>
          <input type="date" name="checkin" className={`${fieldClass} mt-1.5`} />
        </label>

        <label className="px-5 py-4 sm:px-6 sm:py-5">
          <span className={labelClass}>Check-out</span>
          <input type="date" name="checkout" className={`${fieldClass} mt-1.5`} />
        </label>

        <label className="px-5 py-4 sm:px-6 sm:py-5">
          <span className={labelClass}>Guests</span>
          <select name="guests" defaultValue="2" className={`${fieldClass} mt-1.5`}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} Guest{n > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </label>

        <label className="px-5 py-4 sm:px-6 sm:py-5">
          <span className={labelClass}>Rooms</span>
          <select name="rooms" defaultValue="1" className={`${fieldClass} mt-1.5`}>
            {[1, 2, 3].map((n) => (
              <option key={n} value={n}>
                {n} Room{n > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </label>

        <button
          type="submit"
          className="col-span-2 flex items-center justify-center gap-2 bg-sage-deep px-6 py-5 font-body text-[12px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-[#566153] sm:col-span-4 md:col-span-1"
        >
          Check Availability
        </button>
      </div>
    </form>
  );
}
