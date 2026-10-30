const images = import.meta.glob(
  '../assets/*.{png,jpg,jpeg,webp,PNG}',
  {
    eager: true,
    import: 'default'
  }
);
const projects=[
    {
        id:1,
        name:"Health risk calculator",
        images:[
            images['../assets/l3.PNG'],
            images['../assets/l31.PNG'],
            images['../assets/l32.PNG'],
            images['../assets/l33.PNG'],
            images['../assets/l34.PNG'],
            images['../assets/l35.PNG'],
            images['../assets/l36.PNG'],
            images['../assets/l37.PNG'],
            images['../assets/l38.PNG'],
            images['../assets/l39.PNG']
        ],
        short_description:"Multiple ML models. One smarter approach to health risk prediction",
        detailed_description:"Developed a web-based health risk calculator by integrating multiple pre-trained machine learning models into a unified application. Built the Python backend to handle user inputs, process requests, and connect the models with an HTML frontend. Focused on creating a functional system that brings different prediction capabilities together through a simple and accessible user interface."
    },{
      id:2,
      name:"LED Matrix RPG Arcade",
      images:[
        images['../assets/Picture1.jpg'],
        images['../assets/Picture2.jpg'],
        images['../assets/Picture3.jpg'],
        images['../assets/Picture4.jpg']

      ],
      short_description:"Bringing classic arcade games to life with Arduino, LED matrices, and interactive joystick controls.",
      detailed_description:"Designed and programmed an interactive Arduino-based arcade system featuring two classic games: PONG and DINO RUN. The project uses an 8×8 LED matrix to display gameplay, a joystick for player movement and menu navigation, and an LCD screen to display game information and scores. It also includes sound effects through a buzzer and visual feedback using RGB LEDs. The system combines hardware components and embedded C++ programming to create an engaging, interactive gaming experience."

    }

]
export default projects