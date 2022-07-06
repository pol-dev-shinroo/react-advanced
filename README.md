## Why use const for useState

useState triggers re-render. On re-renders, you are getting a new variable entirely.

## useState and useEffect

-   ### useState

When trying to change a variable when clicking a button, the internal value for the button will be changed but this change will not be displayed on the screen. This is because the changing of the value does not trigger re-rendering of the component.

For normal JS, a change of a value will cause the entire webpage to re-render. However, react is designed so, that only if certain conditions are met, the relavant component will re-render (for performance reasons)

Hence, react introduced useState.

```js
const [value, setValue] = useState("hello world");
```

Essentially useState is an array containing two items. The state value, and setState function which changes the state value.
By using setValue, it not only internally changes the value for a variable, but also triggers re-render (while remembering the changed value for the variable).

-   ### useEffect

When a component re-renders, everything within the component will be re-rendered.
Hence, React also introduced a mechanism to control what will be run each time a component re-renders.

```js
useEffect(() => {
    console.log("run for every render");
});

useEffect(() => {
    console.log("run only for the initial render");
}, []);

// dependency is useful when having multiple states
useEffect(() => {
    console.log("run only when the dependency changes");
}, [dependency]);
```

-   ## combining useEffect and useState

```js
const [value, setValue] = useEffect(0);
useEffect(() => {
    document.title = `New Messages ${value}`;
});

const handler = () => {
    setValue((prev) => {
        return prev + 1;
    });
    document.title = `New Messages ${value}`;
};
```

In the second example, the change in the title will not be reflected because when setting the title value, the value is still at the previous.
Hence, this is where useEffect comes in handy.

## conditions of re-rendering in React

-   state change
-   props change (changes in the parent)

## Tricks for setTimeout(using <span style="color: red">prev</span>)

```js
const valueHandler = () => {
    setTimeout(() => {
        setValue(value + 1);
    }, 2000);
};
```

In the above example, the value will only increase by one no matter how many times you click the button during the 2000s.
This is because setTimeout is asynchronous.
But also because we are looking at the value directly.

```js
const valueHandlerProper = () => {
    setTimeout(() => {
        setProperValue((prev) => {
            return prev + 1;
        });
    }, 2000);
};
```

In the above example, we are looking at the previous value right before the update. (hence, not the value from the useState).

This is known as the functional approach to state changing.
<b>Basically, you can use it all the time whenever you are to change state value</b>

## Cleanup function (handling eventlistener) - useEffect

![eventlistener](https://user-images.githubusercontent.com/102004753/177125953-dbe22f44-9f41-44ca-8060-e5b12ce188d7.png)

React’s useEffect cleanup function saves applications from unwanted behaviors like memory leaks by cleaning up effects. In doing so, we can optimize our application’s performance.

-   prevent memory leaks
-   removes unecessary and unwanted behavior
-   enhance performance

```js
useEffect(() => {
    window.addEventListener("resize", sizeHandler);
    return () => {
        window.removeEventListener("resize", sizeHandler);
    };
});
```

<b>
    the function inside return is called "cleanup function"
</b>

## Avoiding Infinite Loop

```js
const url = "...";
const FetchData = () => {
    const [list, setList] = useState([]);
    const getData = async => {
        const response await fetch(url);
        const users = await response.json();
        setList(users)
    }
    useEffect(()=>{
        getData();
    },[])
};
```

Forgetting dependency array would trigger infinite loop.

-   #### If no dependency array:
    (1) getData() in useEffect
    (2) state is changed
    (3) triggers useEffect, getData()
    (4) state is changed ... repeat...

## Asynchronous vs Synchronous

<b>synchronous</b> = 동기 = 동시 = not waiting, not sequential
<b>asynchronous</b> = 비동기 = 비동시 = awaiting, is sequential

<b>Asynchronous</b> means that you can use fetch to make a call to an external API without halting the execution of other instructions. That way, other functions on the site will continue to run even when an API call has not been resolved.

## ajax

<b>비동기 방식의 통신기법</b>

![screenshot](https://user-images.githubusercontent.com/102004753/177302746-5b236beb-beb5-4fc7-a141-9e658c0d8029.png)

<ul>
    <li>Ajax is a standard web development technique for getting and sending data vis-a-vis web server, using a technology known as <b>XMLHttpRequest.</b>
    </li>
    <li>It allow you to update parts of the DOM of an HTML page <b>without the need for a full page refresh.</b>
    </li>
    <li>It also lets you work <b>asynchronously,</b> meaning your code continues to run while the targeted part of your web page is trying to reload (compared to synchronously, which blocks your code from running until that part of your page is done reloading)</li>
</ul>

<b>정리:</b>

<ul>
    <li>자바스크립트를 이용해 서버와 브라우저가 비동기 방식으로 <b>XML데이터를 교환할 수 있는 통신 기능</b></li>
    <li>데이터를 이동하고 화면을 구성하는데 있어서 <b>전체 페이지를 새로 고치지 않고도 페이지의 일부만을 위한 데이터를 로드하는 기법</b></li>
</ul>

<b>Promise chaining (then/catch)</b>

<u>비동기처리 (ex. AJAX)를 동기방식으로 처리</u>

<ul>
    <li>When having multiple ajax api requests, you might want to <b>make what is asynchronous synchronous.</b></li>
    <li>This is done via Promise chaining.</li>
    <li><span style="background-color: #fff2ea">then</span>, <span style="background-color: #fff2ea">catch</span> and <span style="background-color: #fff2ea">finally</span> are methods of the Promise object, and they are <b>chained one after the other.</b></li>
</ul>

![screenshot](https://user-images.githubusercontent.com/102004753/177295246-5c837fcd-8541-47da-bde7-fedd76887051.png)

## setTimeout()

<b>Example for asynchrnous workflow</b>

```js
// #1
console.log("Hello");
// #2
setTimeout(function () {
    console.log("Bye");
}, 3000);
// #3
console.log("Hello again");
```

```js
"Hello"; ...#1
"Hello again"; ...#3
"Bye"; ...#2
```

## async vs then

| async/await        | then/catch      |
| ------------------ | --------------- |
| ES7                | ES6             |
| better readability | nesting promise |

## Promise API and then() method

Previously, callback functions were used instead of Promise chaining

<b>Callback hell</b>
![image](https://user-images.githubusercontent.com/102004753/177303680-e6f894e5-7cd1-4259-991e-44a82abf95e3.png)

<b>Nested Promise = Promise Hell</b>

```js
wakeUp().then((data) => {
    console.log(data);

    haveMeal().then((data) => {
        console.log(data);

        drinkSoju().then((data) => {
            console.log(data);

            sleep().then((data) => {
                console.log(data);
            });
        });
    });
});
```

<b>Promise Chaining (ES6)</b>

Refactoring into a more <b>"linear"</b> flow <b>without the unnecessary indentation and nesting.</b>

```js
wakeUp()
    .then((data) => {
        console.log(data);
        return haveMeal();
    })
    .then((data) => {
        console.log(data);
        return drinkSoju();
    })
    .then((data) => {
        console.log(data);
        return sleep();
    })
    .then((data) => {
        console.log(data);
    });
```

<b>Async/Await</b>
A better and cleaner way of handling the promise is through the async/await keywords.

```js
fetch("https://ubahthebuilder.tech/posts/1", { param: param })
    .then((data) => {
        return data.json();
    })
    .then((post) => {
        console.log(post.title);
    })
    .catch((error) => {
        console.log(error);
    });

vs;

async function f() {
    try {
        let response = await fetch("https...", {
            method: "GET",
            headers: {
                Accept: "*/*",
            },
        });
        let user = await response.json();
    } catch (err) {
        alert(err);
    }
}
```

## jquery, fetch, axios and apisauce

Axios is just a <b>JavaScript library</b> that <b>helps you to use Ajax easier.</b> There are other JavaScript libraries, such as jQuery and Fetch API that help to do similar functionalities.

## 순수 Ajax를 사용하는 경우:

```js
// use Ajax without Jquery
function reqListener(e) {
    console.log(e.currentTarget.response);
}
var oReq = new XMLHttpRequest();
var serverAddress = "https://jsonplaceholder.typicode.com/posts";

oReq.addEventListener("load", reqListener);
oReq.open("GET", serverAddress);
oReq.send();
```

## Jquery를 통해 Ajax를 사용하는 경우

<b>improved readability</b>

```js
// use Ajax with Jquery

var serverAddress = "https://jsonplaceholder.typicode.com/posts";

// jQuery의 .get 메소드 사용
$.ajax({
    url: "https...",
    type: "GET",
    success: function onData(data) {
        console.log(data);
    },
    error: function onError(error) {
        console.error(error);
    },
});
```

## Axios 를 사용한 API 통신

<b>기본 syntax = very similar to Jquery Ajax</b>

```js
axios({
    method: "get",
    url: "http://bit.ly/2mTM3nY",
    responseType: "stream",
}).then(function (response) {
    response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
});
```

<b>Axios의 장점: instance 생성 + 다양한 기능 (ex. timeout)</b>

<b>또 다른 장점:</b> in Axios responses are already served as javascript object, <b>no need to parse,</b> simply get response and access data. (<b>no need to response.json()</b> as in Fetch API)

```js
import axios from "axios";

const fetchData = axios.create({
    baseURL: process.env.REACT_APP_API_KEY,
    timeout: 1000,
    headers: {
        Accept: "*/*",
    },
});

export default fetchData;
```

<b>instance 사용하기</b>

```js
const axiosGet = () => {
    fetchData.get("authors").then((res) => {
        console.log(res.data);
    });
};
```

<b>async/await 사용하기</b>

```js
const TestApiCall = async () {
  try {
    const response = await axios.get('https://test.com/api/v1')
    const userId = response.data.userId;
    const response2 = await axios.get('https://test2.com/api/v2/' + userId);
    console.log("response >>", response2.data)
  } catch(err) {
    console.log("Error >>", err);
  }
}
```

<b>fetch() 의 단점</b>
.catch() 는 오직 네트워크 에러만 잡아준다 (ex. 404에러는 못 잡는다)
따라서, 종종 이러한 코드를 보게 된다...

```js
useEffect(() => {
    fetch(url)
        .then((res) => {
            if (res.status >= 200 && res.status < 299) {
                return res.json();
            } else {
                setIsError(true);
            }
        })
        .then((user) => {
            const { user } = user;
            setUser(user);
        })
        .catch((error) => {
            console.log(error);
        });
});
```

<b>반면, axios 는 잡아준다.</b>

## using async within useEffect

```js
// ❌ don't do this
useEffect(async () => {
    const data = await fetchData();
}, [fetchData]);
```

```js
// ✅ the correct way:
useEffect(() => {
    const fetchData = async () => {
        const data = await fetch("https://yourapi.com");
    };

    fetchData().catch(console.error);
}, []);
```
