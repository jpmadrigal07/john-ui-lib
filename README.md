## Getting Started

To install dependencies:

```bash
npm i
# or
yarn
# or
pnpm
```

To build, run this command:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

To test, run this command:

```bash
npm run test
# or
yarn test
# or
pnpm test
```

If you want to use this to your own project, add this line in you package.json dependencies, 

*`"john-ui-lib": "git+https://github.com/jpmadrigal07/john-ui-lib#main"`*

Then, run an dependencies installation again.

Then, you can implement it like this:

```bash
import { Button } from "john-ui-lib";

const Component = () => {
    return (
        <Button variant="warning" dim="md" onClick={() => alert("test")}>Ghost</Button>
    );
}
```