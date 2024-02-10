import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";

const User = [
  { id: "elonmusk", nickname: "Elon Musk", image: "/vercel.svg" },
  { id: "zerohch0", nickname: "제로초", image: "/profile.png" },
  { id: "leoturtle", nickname: "레오", image: faker.image.avatar() },
];

function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
}

export const handlers = [
  http.post("/api/login", () => {
    console.log("로그인");
    return HttpResponse.json(User[1], {
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
      },
    });
  }),

  http.post("/api/logout", () => {
    console.log("로그아웃");
    return new HttpResponse(null, {
      headers: {
        "Set-Cookie": "connect.sid=;HttpOnly;Path=/;Max-Age=0",
      },
    });
  }),

  http.post("/api/users", async ({ request }) => {
    return HttpResponse.text(JSON.stringify("user_exists"), {
      status: 403,
    });
    // return HttpResponse.text(JSON.stringify("ok"), {
    //   headers: {
    //     "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0",
    //   },
    // });
  }),

  http.get("/api/posts/followings", ({ request }) => {
    return HttpResponse.json(
      Array.from({ length: 10 }, (_, i) => ({
        postId: i + 1,
        User: User[0],
        content: `${i + 1} Stop following me. I'm too famous.`,
        Images: [{ imageId: i + 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      }))
    );
  }),

  http.get("/api/posts/recommends", ({ request }) => {
    const url = new URL(request.url);
    const cursor = parseInt(url.searchParams.get("cursor") as string) || 0;

    return HttpResponse.json(
      Array.from({ length: 10 }, (_, i) => ({
        postId: cursor + i + 1,
        User: User[0],
        content: `${cursor + i + 1} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      }))
    );
  }),
];
