const convertBtn = document.querySelector('.convert-button');
const URLinput = document.querySelector('.URL-input');

const sendURL=URL=>{
    // fetch(`http://localhost:4000/download?URL=${URL}`, {
    //     method:'GET'
    // }).then(res => res.json())
    // .then(json => console.log(json));
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}
convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});
