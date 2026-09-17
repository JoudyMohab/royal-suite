# Running this project

Next.js 16 (App Router) + Tailwind v4. English at `/`, Arabic (RTL) under `/ar`.

## Artifacts a fresh checkout needs

None. The project needs no environment file, no generated assets and no
database — all hotel data, photography and copy live in the repository
(`src/data`, `src/lib/i18n`, `public/images`).

Install dependencies with the committed lockfile:

```
npm ci
```

## Running the server

Default port is 3000. If it is taken — for example by another checkout's
dev server — pick a free port and pass it through:

```
npm run dev -- --port 3102
```

Windows, detached so it outlives the terminal that started it:

```
powershell -NoProfile -Command "(Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','dev','--','--port','3102' -RedirectStandardOutput '.freebuff/preview.log' -RedirectStandardError '.freebuff/preview.log.err' -WindowStyle Hidden -PassThru).Id"
```

Name the executable exactly (`npm.cmd`); PowerShell does not resolve shell
shims like `npm`. stdout and stderr must go to different files.

## Production build

`next build` and `next dev` share `.next`, so stop the dev server before
building:

```
npm run build
```

Typecheck and lint:

```
npx tsc --noEmit
npx eslint src --max-warnings 0
```
