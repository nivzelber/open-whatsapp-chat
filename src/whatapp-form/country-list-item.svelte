<script lang="ts">
  import type { Country } from "./country.type";

  const flagHeight = 24;
  const flagWidth = 32;

  const getCountryIcon = (isoCode: string) =>
    `https://flagcdn.com/h${flagHeight}/${isoCode.toLowerCase()}.png`;

  export let country: Country;
</script>

<div class="flex">
  <img
    height={flagHeight}
    width={flagWidth}
    alt={country.isoCode}
    src={getCountryIcon(country.isoCode)}
  />
  <span class="ml-1">+{country.dialCode}</span>
</div>
