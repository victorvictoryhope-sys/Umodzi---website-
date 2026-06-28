
let  questions = [
    {question:'Which part of a computer displays informaation?',
       A:'Mouse',
       B:'CPU',
       C:'Monitor',
       D:'Scanner',
       correct:'C'
    },

    {question:'Which one is an input device?',
       A:'CPU',
       B:'Monitor',
       C:'RAM',
       D:'Keyboard',
       correct:'D'
    },

    {question:'Which one is a primary type of computer storage?',
       A:'SSD',
       B:'HDD',
       C:'RAM',
       D:'Registers',
       correct:'C'
    },

    {question:'Which device is used to print documents?',
        A:'Scanner',
        B:'Webcam',
        C:'Router',
        D:'printer',
        correct:'D'
    },

    {question:'What is the brain of the computer?',
        A:'RAM',
        B:'CPU',
        C:'Monitor',
        D:'Keyboard',
        correct:'B'
    },

    {question:'Which one is an output device?',
        A:'Keyboard',
        B:'Mouse',
        C:'Speaker',
        D:'scanner',
        correct:'C'
    },

    {question:'Which one is an input dvice?',
        A:'Printer',
        B:'Speaker',
        C:'Projector',
        D:'Scanner',
        correct:'D'
    },

     {question:'Which storage device is portable?',
        A:'Flash drive',
        B:'SSD',
        C:'RAM',
        D:'HDD',
        correct:'A'
    },

     {question:'Which software is used to type documents?',
        A:'Power point',
        B:'Browser',
        C:'Word processor',
        D:'Excel',
        correct:'C'
    },

     {question:'Which one of these is an operting system?',
        A:'EXcel',
        B:'Chrome',
        C:'Windows',
        D:'Paint',
        correct:'C'
    },

     {question:'Which company developed Windows?',
        A:'Google',
        B:'Samsung',
        C:'Apple',
        D:'Microsoft',
        correct:'D'
    },

     {question:'What is used to connect to the internet wirelessly?',
        A:'Router',
        B:'Printer',
        C:'Scanner',
        D:'Webcam',
        correct:'A'
    },

     {question:'Whcih program is used to browse the internet?',
        A:'Power point',
        B:'Firefox',
        C:'VLC',
        D:'Excel',
        correct:'B'
    },

     {question:'Which of these is used for calculations?',
        A:'Power point',
        B:'Excel',
        C:'Word processor',
        D:'Chrome',
        correct:'B'
    },

     {question:'Which one stores files permanently?',
        A:'ROM',
        B:'Cache',
        C:'Hard disk',
        D:'RAM',
        correct:'C'
    },

    {question:'Which one is software?',
        A:'Keyboard',
        B:'Mouse',
        C:'Monitor',
        D:'Windows',
        correct:'D'
    },

    {question:'Which one is hardware?',
        A:'Excel',
        B:'WIndows',
        C:'KEyboard',
        D:'VLC',
        correct:'C'
    },

    {question:'What is the shortcut for copy?',
        A:'Crtl+X',
        B:'Crtl+C',
        C:'Crtl+V',
        D:'Crtl+Z',
        correct:'B'
    },

    {question:'What is the shortcut for paste?',
        A:'Crtl+V',
        B:'Crtl+P',
        C:'Crtl+S',
        D:'Crtl+Z',
        correct:'A'
    },


    {question:'Which of these is used for presentations?',
        A:'NOtepad',
        B:'Powepoint',
        C:'Wordpad',
        D:'EXCel',
        correct:'B'
    },

    {question:'Which company developed Android?',
        A:'Apple',
        B:'Google',
        C:'Nokia',
        D:'Intel',
        correct:'B'
    },

    {question:'Which number system do computers mainly use?',
        A:'Decimal',
        B:'Roman',
        C:'Hexadecimal',
        D:'Binary',
        correct:'D'
    },

    {question:'How many bits are in one byte?',
        A:'2',
        B:'4',
        C:'8',
        D:'16',
        correct:'C'
    },

    {question:'What is binary made of?',
        A:'0 n 2',
        B:'1 n 2',
        C:'A n B',
        D:'0 n 1',
        correct:'D'
    },

    {question:'Which storage is fastest?',
        A:'HDD',
        B:'SSD',
        C:'CD',
        D:'Flash disk',
        correct:'B'
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {

    let q = questions[currentQuestion];

    document.getElementById('question').innerText = q.question;

    document.getElementById('btn1').innerText = q.A;

    document.getElementById('btn2').innerText = q.B;

    document.getElementById('btn3').innerText = q.C;

    document.getElementById('btn4').innerText = q.D;

    document.getElementById('current').innerText = 'Question: '+currentQuestion+ ' of '+ questions.length;
}



 function nextQuestion() {
        currentQuestion++;
            loadQuestion();
            document.getElementById('result').innerText = '';

             document.getElementById('current').innerText = 'Question: '+currentQuestion+ ' of '+ questions.length;
    }

 function previousQuestion() {
        currentQuestion--;
               loadQuestion();
                document.getElementById('current').innerText = 'Question: '+currentQuestion+ ' of '+ questions.length;
 }




function checkAnswer(answer) {
    let q = questions[currentQuestion];

    if (answer === q.correct) {
        score++;
        document.getElementById('result').style.color = 'green';
        
        document.getElementById('result').innerText = 'CORRECT!';
    } else {
        
        document.getElementById('result').style.color = 'red';

        document.getElementById('result').innerText = 'WRONG!';
    }

    currentQuestion++;

  

    if ( currentQuestion < questions.length ) {
        loadQuestion()
    } else {
        document.getElementById('question').innerText = 'QUIZ FINISHED!';
        document.getElementById('result').style.color = 'white';
        document.getElementById('result').innerText = 'Final score: '+ score +' out of  '+questions.length;

        document.getElementById('btn1').style.display = 'none';

         document.getElementById('btn2').style.display = 'none';

          document.getElementById('btn3').style.display = 'none';

           document.getElementById('btn4').style.display = 'none';

           document.getElementById('btnN').style.display = 'none';

           document.getElementById('btnP').style.display = 'none';

            document.getElementById('score').style.display = 'none';

        document.getElementById('lbl1').style.display = 'none';

        document.getElementById('lbl2').style.display = 'none';

        document.getElementById('lbl3').style.display = 'none';

        document.getElementById('lbl4').style.display = 'none';

        document.getElementById('current').innerText = '';

    }
    

    document.getElementById('score').innerText = 'Score: '+ score;

}

    loadQuestion();