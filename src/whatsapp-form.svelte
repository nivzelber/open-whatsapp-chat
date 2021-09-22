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

  export let whatsappURL = "https://wa.me/";
</script>

<main>
  <div class="dropdown">
    <button class="dropbtn">
      <img
        height="20"
        width="20"
        alt={selectedCountry.isoCode}
        src={`https://www.countryflags.io/${selectedCountry.isoCode}/flat/32.png`}
      />
      +{selectedCountry.dialCode}</button
    >

    <div class="dropdown-content">
      {#each countries as country}
        <button
          on:click={() => {
            selectedCountry = country;
          }}
        >
          <img
            height="20"
            width="20"
            alt={country.isoCode}
            src={`https://www.countryflags.io/${country.isoCode}/flat/32.png`}
          />
          +{country.dialCode}</button
        >
      {/each}
    </div>
  </div>
  <input
    type="text"
    name="Phone Number"
    placeholder="Enter Phone Number"
    bind:value={phoneNumber}
  />
  <button
    on:click={() => (window.location.href = whatsappURL + selectedCountry.dialCode + phoneNumber)}
    >Open!</button
  >
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  .dropbtn {
    /* background-color: #4caf50; */
    /* color: white; */
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content button {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content button:hover {
    background-color: #444;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>
