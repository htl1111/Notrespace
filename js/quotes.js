const quotes = [
    {
        quote: "마음을 흘려보내 파아란 하늘 높이 파아란 바다 깊이 훌훌 다 다시 달려갈 수 있게",
        author: "비투비, 흘려보내",
    },
    {
        quote: "너를 꽉 안을 때 난 두려울 게 없어져 너의 숨결이 닿을 때 난 우주를 느껴",
        author: "비투비, 우리 (Be together)",
    },
    {
        quote: "누군가 말했죠 내 꿈이 멀게만 느껴질 땐 잠시 쉬다 가세요",
        author: "비투비, 괜찮아요",
    },
    {
        quote: "남보다는 나를 돌아볼 것 마음의 여유를 안고 사는 것 나에게 하는 약속 세상의 모든 것들",
        author: "비투비, Thank you",
    },
    {
        quote: "모든 순간이 빛나진 않지 인생은 알수록 어려운 다크초콜릿",
        author: "비투비, Thank you",
    },
    {
        quote: "You’re the star of your life",
        author: "BTOB, DREAMER",
    },
    {
        quote: "한 걸음 한 걸음 가자 멈추지만 않으면 끝이 아니니까",
        author: "비투비, 여행 (Traveler)",
    },
    {
        quote: "조명이 켜지면 모두 주인공이니까",
        author: "비투비, Finale: 우리들의 콘서트",
    },
    {
        quote: "If you overlook us Then you’re gonna miss out",
        author: "BTOB, Finale (Show and Prove)",
    },
    {
        quote: "돌아오는 날은 몰라도 발길 닿는 그곳이 좋아 혹시 날 기다릴까 새로운 무언가",
        author: "비투비, 나나나",
    },
    {
        quote: "한발 나서는 게 그대는 잘하고 있단 거예요",
        author: "비투비, 그려본다 (내가 그린 그림)",
    },
    {
        quote: "고개를 들어요 기죽지 마요 한 걸음씩 걷다 보면 넘어져도 괜찮아요",
        author: "비투비, 그려본다 (내가 그린 그림)",
    },
    {
        quote: "넘어져도 결코 포기하지 마 네 안의 진짜 너를 깨워 봐",
        author: "비투비, 그려본다 (내가 그린 그림)",
    },
    {
        quote: "시간이 흘러서 우리가 조금 익숙해져도 지금 이 느낌을 잊지 말자",
        author: "비투비, 보고파",
    },
    {
        quote: "너와 나 함께 꿈꿨던 미래 서로 손 꼭 잡고 날아올라 저 높이",
        author: "비투비, 예지앞사",
    },
    {
        quote: "언제나 널 지켜줄 사람 그게 너라서 참 다행이야",
        author: "비투비, Yes I Am",
    },
    {
        quote: "아직 넌 멀기만 한데 내 안의 별은 자꾸만 커지네",
        author: "비투비, 별",
    },
    {
        quote: "하루하루가 기적과 같아요",
        author: "비투비, 목소리",
    },
    {
        quote: "그 어떤 사람 너라도 사랑할게",
        author: "서은광, 1분에 한 번",
    },
    {
        quote: "소중히 간직했었던 내 안에 그려온 날들 끝나지 않을 나의 꿈이 되어 한없이 피어나네",
        author: "서은광, 서랍",
    },
    {
        quote: "고단한 발걸음이 하나가 되는 순간 그 순간이 모여 우릴 비춰주길",
        author: "서은광, 세상에 영원한 게 없다 해도 (WALK)",
    },
    {
        quote: "나를 더 좋은 사람이고 싶게 만들어",
        author: "이민혁, Fallin’",
    },
    {
        quote: "우리 함께면 뭔들 아름답지 않을까",
        author: "이민혁, Fallin’",
    },
    {
        quote: "작은 물살들이 큰 물결을 이루듯이 진심은 외면받지 않아요.",
        author: "이민혁",
    },
    {
        quote: "내가 누군가를 바라보며 꿈꿨고, 우리도 누군가의 꿈이 될 것이란 희망이 있다.",
        author: "임현식",
    },
    {
        quote: "어느 위치에 있든, 도전하시는 거예요. 그래서 승리하세요.",
        author: "이창섭",
    },
    {
        quote: "사랑을 위해서 사랑할 필요는 없어, 그저 용감하게 발걸음을 떼기만 하면 돼.",
        author: "이창섭",
    },
    {
        quote: "마침표를 찍어야 할 땐 과감히 끝내고, 쉬어야 하는 순간엔 쉼표도 적절히 써가는 센스",
        author: "임현식",
    },
]

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");
const lengthOfQuotes = quotes.length;

const todaysQuote = quotes[Math.floor(Math.random() * lengthOfQuotes)];

quote.innerText = todaysQuote.quote;
author.innerText = "- " + todaysQuote.author;