import {h, app, text} from "./hyperapp.js";
import {
    body, main, header, footer, article, section, aside,
    table, thead, tbody, tfoot, tr, th, td, 
    ul, li, nav, form, input, label,
    h1, h2, p, a, span, img, canvas, code, pre, svg, path, br
} from "./hyperapp.html.js";

const node = document.querySelector("body");
console.log("node", node);

const xmark = () =>
    svg({height:"48px", version:"1.1", viewBox:"0 0 512 512", width:"48px", "xml:space":"preserve", xmlns:"http://www.w3.org/2000/svg"}, [
        path({d:"M256,33C132.3,33,32,133.3,32,257c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,133.3,379.7,33,256,33z    M364.3,332.5c1.5,1.5,2.3,3.5,2.3,5.6c0,2.1-0.8,4.2-2.3,5.6l-21.6,21.7c-1.6,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3L256,289.8   l-75.4,75.7c-1.5,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1,0.8-4.2,2.3-5.6l75.7-76   l-75.9-75c-3.1-3.1-3.1-8.2,0-11.3l21.6-21.7c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l75.7,74.7l75.7-74.7   c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l21.6,21.7c3.1,3.1,3.1,8.2,0,11.3l-75.9,75L364.3,332.5z"})
    ]);

const plusmark = () =>
    svg({height:"48", viewBox:"0 0 48 48", width:"48", xmlns:"http://www.w3.org/2000/svg"}, [
        path({d:"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"})
    ]);

const savemark = () =>
    svg({viewBox:"0 0 24 24", xmlns:"http://www.w3.org/2000/svg"}, [
        path({d:"M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM9.71,10.29,11,11.59V6h2v5.59l1.29-1.29,1.41,1.41L12,15.41,8.29,11.71ZM16,18H8V16h8Z"})
    ]);

const swapmark = () =>
    svg({xmlns:"http://www.w3.org/2000/svg", width:"32", height:"32", viewBox:"0 0 256 256"}, [
       path({
           d:"M224,48V152a16,16,0,0,1-16,16H99.31l10.35,10.34a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L99.31,152H208V48H96v8a8,8,0,0,1-16,0V48A16,16,0,0,1,96,32H208A16,16,0,0,1,224,48ZM168,192a8,8,0,0,0-8,8v8H48V104H156.69l-10.35,10.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L156.69,88H48a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16H160a16,16,0,0,0,16-16v-8A8,8,0,0,0,168,192Z"
        })
    ]);

// Array operations
const insert = (a, i, v) => [...a.slice(0, i), v, ...a.slice(i)];
const remove = (a, i) => [...a.slice(0, i), ...a.slice(i + 1)];
const update = (a, i, v) => insert(remove(a, i), i, v);

// Colours
const channel = (v) => (v.toFixed()>>>0).toString(16);
const colour = (gen) =>
    "#" + (
        "000000" +
        channel(gen()) +
        channel(gen()) +
        channel(gen())
    ).slice(-6);

// values
const pc = (i, l) => `${100 * (i + 1) / l}%`;

const gen_gradient = (angle, colours) => (
    colours = colours
        .map(({name, colour}, i) => `${colour} ${pc(i, colours.length)}`)
        .join(","),
    colours = `linear-gradient(${angle}deg, ${colours})`,
    console.log(colours),
    colours
);

const nodefault = (callback) => (state, event) => {
    event.preventDefault();
    return callback(state, event);
};

const progressx = (x, target) =>
    (x - target.getClientRects()[0].x) / target.getBoundingClientRect().width;

const progressy = (y, target) =>
    (y - target.getClientRects()[0].y) / target.getBoundingClientRect().height;

const onsave = ({save, ...state}) => ({
    ...state,
    save: !save
});

const onhover = (state, {x, y, target}) => (
    x = 360 * progressx(x, target) * 0.01,
    y = 360 * progressy(y, target) * 0.01,
    target.style.setProperty("--mouse-x", `${x}rad`),
    target.style.setProperty("--mouse-y", `${y}rad`),
    state
);

const onremove = (i) => ({colours, ...state}) => ({
    ...state,
    colours: colours.length < 2?
        [group("colour-1", colour(() => 255 * Math.random()))]:
        remove(colours, i)
});

const oninsert = (i) => ({colours, ...state}) => ({
    ...state,
    colours: insert(colours, i, group(`colour-${colours.length}`, colour(() => 255 * Math.random())))
});

const onedit = (i, prop) => ({colours, ...state}, event) => ({
    ...state,
    colours: update(colours, i, {...colours[i], [prop]:event.target.value})
});

const onswap = ({style, ...state}) => ({
    ...state,
    // Todo: clamp for more styles
    style: (1 + style) % styles.length
});

const button = ({onclick, ...props}, children) => a({
    ...props,
    class: "button",
    href: "#",
    onmousemove: nodefault(onhover),
    onclick: nodefault(onclick),
}, children);

const palette = (colours) =>
    main([
        ...colours
            .map(
                ({name, colour}, i) =>
                    section({
                        class: "colour",
                        style: {
                            background: colour
                        }
                    }, [
                        p([
                            button({onclick:nodefault(onremove(i))}, [xmark()]),
                            button({onclick:nodefault(oninsert(i))}, [plusmark()]),
                        ]),
                        p([
                            input({type:"text", value:colour, oninput:onedit(i, "colour")}),
                            input({type:"text", value: name, oninput:onedit(i, "name")})
                        ]),
                    ])
            )
    ]);

const gradient = (colours) =>
    main({
        style: {
            background: gen_gradient(180, colours)
        }
    }, [
        ...colours
            .map(
                ({name, colour}, i) =>
                    section({
                        class: "colour",
                        style: {
                            background: "transparent"
                        }
                    }, [
                        p([
                            button({onclick:nodefault(onremove(i))}, [xmark()]),
                            button({onclick:nodefault(oninsert(i))}, [plusmark()]),
                        ]),
                        p([
                            input({type:"text", value:colour, oninput:onedit(i, "colour")}),
                            input({type:"text", value: name, oninput:onedit(i, "name")})
                        ]),
                    ])
            )
    ]);

const styles = [
    palette,
    gradient
];

const attr = (v) => code({class: "attr"}, text(`${v}:`));
const value = (v) => code({class: "value"}, text(`${v};`));
const param = (k, v) => [attr(k), text(" "), value(v), br()];

const render = ({colours, style, save}) =>
    body([
        header([
            !save &&
            aside([
                button({onclick:onsave}, [savemark()]),
                button({onclick:onswap}, [swapmark()]),
            ]),

            save &&
            aside({class: "modal"}, [
                p([
                    button({onclick:onsave}, [xmark()])
                ]),
                pre([
                    ...colours
                        .map(
                            ({name, colour}) =>
                                param(`--colour-${name}`, colour)
                        )
                        .flat()
                ])
            ]),
        ]),

        styles[style](colours)
    ]);

const group = (name, colour) => ({name, colour});

const colours = [
    group("bg-primary", "#C46564"),
    group("bg-secondary", "#F0E999"),
    group("text-primary", "#B8C99D"),
    group("text-secondary", "#9B726F"),
    group("info", "#EEB15B")
];

const dispatch = await app({
    init:{colours, style:0},
    view: render,
    node
});
