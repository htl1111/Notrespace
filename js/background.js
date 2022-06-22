const background = [
    {
        first: "#c0c0aa",
        last: "#1cefff", // 
    },
    {
        first: "#00c3ff",
        last: "#ffff1c", // Brady Brady Fun Fun
    },
    {
        first: "#00C9FF",
        last: "#92FE9D", // Back To Earth
    },
    {
        first: "#74ebd5",
        last: "#1cefff", // Digital Water
    },
    {
        first: "#AAFFA9",
        last: "#11FFBD", // Teal Love
    },
    {
        first: "#00d2ff",
        last: "#3a7bd5", // Reef
    },
    {
        first: "#70e1f5",
        last: "#ffd194", // Shore
    },
    {
        first: "#acb6e5",
        last: "#86fde8", // Windy
    },
    {
        first: "#22c1c3",
        last: "#fdbb2d", // Summer
    },
    {
        first: "#108dc7",
        last: "#ef8e38", // Pun Yeta
    },
]

const wallpaper = document.querySelector(".background");
const lengthOfBackground = background.length;

const todaysBackground = Math.floor(Math.random() * lengthOfBackground);
const firstBackColor = background[todaysBackground].first;
const LastBackColor = background[todaysBackground].last;

wallpaper.style.background = `linear-gradient(${firstBackColor}, ${LastBackColor})`;