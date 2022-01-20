<script lang="ts">
  import { fade } from "svelte/transition";

  import countriesJSON from "../country-codes.json";
  import type { Country } from "./country.type";
  import CountryListItem from "./country-list-item.svelte";

  const whatsappURL = "https://wa.me/";
  const countries: Country[] = countriesJSON;

  let selectedCountry: Country = {
    name: "Israel",
    dialCode: "972",
    isoCode: "IL"
  }; // default option
  let phoneNumber: number;
  let show = false;
</script>

<div class="flex h-screen" on:click={() => (show = false)}>
  <main
    class="m-auto flex gap-2 items-center border-b border-green-200 py-2 focus-within:border-green-400"
  >
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
          class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-1 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <a href="#" class="text-gray-700 block px-3 py-1 text-sm" role="menuitem" tabindex="-1">
            <CountryListItem country={selectedCountry} />
          </a>
          <svg
            class="mr-1 ml-4 h-5 w-5 m-auto transform transition-transform duration-200 ease-in-out"
            class:rotate-180={show}
            class:rotate-0={!show}
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

      {#if show}
        <div
          class="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-h-40 overflow-y-scroll focus:outline-none"
          in:fade={{ delay: 0, duration: 300 }}
          out:fade={{ delay: 0, duration: 150 }}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
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
                <CountryListItem {country} />
              </a>
            {/each}
          </div>
        </div>
      {/if}
    </div>

    <input
      type="search"
      pattern="\d*"
      inputmode="numeric"
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
  </main>
</div>
