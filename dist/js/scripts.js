
function kfkf () {
    const input = document.querySelector(".js-input-tel");
    // window.intlTelInput(input, {
    //     loadUtilsOnInit: "inputTel/utils.js",
    //     initialCountry: "ru", // Начальная страна Россия
    //     onlyCountries: ["ru", "kz"], // Только Россия и Казахстан
    //     preferredCountries: ["ru", "kz"], // Предпочтительные страны
    //     autoPlaceholder: "aggressive",
    //     separateDialCode: true,
    //     // utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js?1727952657388" // нужен для полезных функций при валидации
    // });

    const countryNames = {
        "ru": "Россия",
        "kz": "Казахстан"
    };

    window.intlTelInput(input, {
        loadUtilsOnInit: "inputTel/utils.js",
        initialCountry: "ru",
        onlyCountries: ["ru", "kz"],
        preferredCountries: ["ru", "kz"],
        autoPlaceholder: "aggressive",
        separateDialCode: true,
        customPlaceholder: (selectedCountryPlaceholder, selectedCountryData) => {
            return selectedCountryPlaceholder.replace(/^\+/, ''); // Убираем + из начала плейсхолдера
        },
        localCountryCodes: ['ru', 'kz'], // Для указания локальных кодов (опционально)
        /* Это дополнительный параметр для вывода названий стран на русском языке */
        nationalMode: true
    });

    // Переопределяем названия стран
    const countryList = input.parentNode.querySelector('.iti__country-list'); // Находим список стран
    if (countryList) {
        const countries = countryList.querySelectorAll('.iti__country');
        countries.forEach(country => {
            const code = country.getAttribute('data-country-code');
            if (countryNames[code]) {
                const nameElement = country.querySelector('.iti__country-name');
                nameElement.textContent = countryNames[code]; // Заменяем на русское название
            }
        });
    }
}

kfkf();