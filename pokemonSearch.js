<script>
    function searchPokemon() {
        const pokemonName = document.getElementById('pokemonName').value;
        const url = `https://mindsetpro.github.io/PokeJavaAPI/Pokemon/${pokemonName}.json`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const codeContainer = document.getElementById('codeContainer');
                const pokemonData = document.getElementById('pokemonData');
                pokemonData.textContent = JSON.stringify(data, null, 2);
                codeContainer.style.display = 'block';
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
</script>
