const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

for(let i=0; i<q.length; i++){
    q[i].addEventListener('click', () => {
        a[i].classList.toggle('a-opened');
        arr[i].classList.toggle('arrow-rotated');
    });
}
// const apiKey = 'YOUR_GOOGLE_TRANSLATE_API_KEY'; // Replace with your actual API key

// function translateText(text, targetLanguage) {
//     const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    
//     return fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             q: text,
//             target: targetLanguage
//         })
//     })
//     .then(response => response.json())
//     .then(data => data.data.translations[0].translatedText)
//     .catch(error => console.error('Error:', error));
// }

// function changeLanguage(language) {
//     const languageMap = {
//         en: 'en',
//         mr: 'mr',
//         hi: 'hi'
//     };

//     const elementsToTranslate = document.querySelectorAll("[data-translate]");
    
//     elementsToTranslate.forEach(element => {
//         const originalText = element.getAttribute("data-original-text") || element.textContent;

//         translateText(originalText, languageMap[language]).then(translatedText => {
//             element.textContent = translatedText;
//         });

//         // Store the original text to avoid losing it after translation
//         if (!element.getAttribute("data-original-text")) {
//             element.setAttribute("data-original-text", originalText);
//         }
//     });
// }
