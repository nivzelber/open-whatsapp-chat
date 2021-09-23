<script lang="ts">
  import countriesJSON from "./country-codes.json";

  interface Country {
    name: string;
    dialCode: string;
    isoCode: string;
  }

  export let countries: Country[] = countriesJSON;
  export let selectedCountry: Country = {
    name: "Israel",
    dialCode: "972",
    isoCode: "IL"
  }; // default option
  export let phoneNumber: number;

  export let show = false;

  export let whatsappURL = "https://wa.me/";
</script>

<main class="flex h-screen" on:click={() => (show = false)}>
  <div class="m-auto flex gap-2 items-center border-b border-green-300 py-2">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      class="relative inline-block text-left"
      on:click={e => {
        e.stopImmediatePropagation();
        show = !show;
      }}
    >
      <div>
        <button
          type="button"
          class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-1 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <a href="#" class="text-gray-700 block px-1 py-1 text-sm" role="menuitem" tabindex="-1">
            <div class="flex">
              <img
                height="20"
                width="20"
                alt={selectedCountry.isoCode}
                src={`https://www.countryflags.io/${selectedCountry.isoCode}/flat/32.png`}
              />
              <span class="ml-1">+{selectedCountry.dialCode}</span>
            </div>
          </a>
          <!-- Heroicon name: solid/chevron-down -->
          <svg
            class="-mr-1 ml-4 h-5 w-5 m-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
      {#if show}
        <div
          class="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-h-40 overflow-y-scroll focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
            {#each countries as country}
              <a
                href="#"
                class="flex justify-start text-gray-700 pl-2 pr-6 py-2 text-sm hover:text-gray-900 hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                on:click={() => {
                  selectedCountry = country;
                }}
              >
                <div class="flex ">
                  <img
                    height="20"
                    width="20"
                    alt={country.isoCode}
                    src={`https://www.countryflags.io/${country.isoCode}/flat/32.png`}
                  />
                  <span class="ml-1">+{country.dialCode}</span>
                </div>
              </a>
            {/each}
          </div>
        </div>
      {/if}
    </div>

    <input
      type="text"
      name="Phone Number"
      class="leading-tight focus:outline-none appearance-none bg-transparent border-none w-full text-gray-700 "
      placeholder="Enter Phone Number"
      bind:value={phoneNumber}
    />
    <button
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
      on:click={() => (window.location.href = whatsappURL + selectedCountry.dialCode + phoneNumber)}
      >Open!</button
    >
  </div>
</main>
