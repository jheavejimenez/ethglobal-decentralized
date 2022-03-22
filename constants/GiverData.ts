import { Profile } from "../models/Profile";

export const GiverData = () => {
    const data = [
        new Profile(
            '1',
            'Jhon rhay',
            200345,
            true,
            'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
            'https://icdn.digitaltrends.com/image/digitaltrends/man-holding-teacup-infront-of-laptop-on-top-of-table-inside-925786.jpg',
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look",
        ),
        new Profile(
            '2',
            'Shawn Mendez',
            2350345,
            true,
            'https://fupping.com/wp-content/uploads/2018/06/Personal.png',
            'https://imageio.forbes.com/specials-images/imageserve/5e7242efe1e61700080f2a6e/A-smiling-businessman-waves-to-his-computer-during-a-video-call-/960x0.jpg?fit=bounds&format=jpg&width=960',
            "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
        ),
        new Profile(
            '3',
            'Jheave Jimenez',
            100,
            false,
            'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
            'https://thumbs.dreamstime.com/b/neon-light-brick-walls-not-plastered-background-texture-lighting-effect-red-blue-vertical-empty-basement-wall-190816285.jpg',
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making",
        ),
        new Profile(
            '4',
            'Kevin Paul Lamadrid',
            45890,
            true,
            'https://fupping.com/wp-content/uploads/2018/06/Personal.png',
            'https://i.insider.com/60a7e520e25d05001880ce39?width=1200&format=jpeg',
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
        ),
    ];

    return data;
}