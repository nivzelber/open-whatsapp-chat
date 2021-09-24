<script lang="ts">
  import type { Country } from "./country.type";

  export let flagSize = 20;
  const getCountryIcon = (isoCode: string) => `https://www.countryflags.io/${isoCode}/flat/32.png`;
  export let country: Country;
</script>

<div class="flex">
  <img
    height={flagSize}
    width={flagSize}
    alt={country.isoCode}
    src={getCountryIcon(country.isoCode)}
  />
  <span class="ml-1">+{country.dialCode}</span>
</div>
