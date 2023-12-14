# 제로초님 Nextjs v14 트위터 클론코드 강의

## Style

- TailWind -> 호불호 너무심함
- Styled-components -> Server Component SSR에 문제있음
- Vanilla Extract -> Window에서 문제있음
- CSS Module -> 간단하게 구현 가능하여 채택

## Route

- app router 내부의 []폴더는 `다이나믹 라우팅(=== slug)`을 지원한다.
- ()폴더는 라우팅에 관여하지않고 그룹을 만드는 용도이다.
- layout.tsx는 children이 바뀔시 리렌더링이 되지않고 template.tsx는 리렌더링이 된다. (공존X, 택1)
- `@폴더명`는 `페러렐 라우트(병렬라우트)`로 두개의 컴포넌트를 동시에 보여주기위해 사용된다.
  - 이때 두 컴포넌트는 같은 폴더내부에 있어야함.
  - `default.tsx`는 페러렐 라우트의 기본값을 정의할수있다
- `(.)폴더명 / (..)폴더명`는 `인터셉트 라우트(가로채는 라우트)`로 다른 컴포넌트를 가로채어 보여줄수있다

### 페러럴 라우트와 인터셉트 라우트를 활용

- "/" -> "/i/flow/login"으로 이동시 기존의 <Home />위에 <Login /> 팝업이 뜨도록 구현가능하다.
- 이는 "/i/flow/login"로 이동시 route를 가로채어 @modal 내부의 <Login />을 보여주는것으로, 이동 후 새로고침시에는 (beforeLogin)/i 내부의 <Login />을 보여준다.
- 좀 어려운데 특별한 상황에서 사용될듯..

- `_폴더명`는 private folder로 공통으로 사용되는 폴더가 있다면 \*로 묶어서 사용가능. "i/flow/login" 로직이 공통으로 쓰임

### useRouter

A -> B -> C일때, B에서 useRouter를 사용했을때를 가정

- router.push : history에 stack을 쌓아서 C로 이동한뒤, 뒤로가기를 눌리면 B로 이동.
- router.replace : 현재의 history를 변경하는 방식으로 C로 이동한뒤, 뒤로가기를 눌리면 A로 이동.

### useSelectedSegment와 useSelectedSegments ("next/navigation")

- `useSelectedSegment` : 현재 path의 search의 첫번째값을 리턴
- `useSelectedSegments` : 현재 path의 search전체를 array로 리턴함

```
// localhost:3000/depth1/depth2
import { useSelectedSegment, useSelectedSegments} from "next/navigation"

const segment = useSelectedSegment(); // "depth1"
const segments = useSelectedSegments() // ["depth1", "depth2"]
```
