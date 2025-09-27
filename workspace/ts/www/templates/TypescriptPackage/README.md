# Template For A Typescript Package

## Structure

- `package.json` conf for the ts|js|node packages repos, to install later from, with `yarn` or `npm`.
- `test/` automated tests for ts classes or functions of this package. Keeping in mind TDD))
  - `test/AnyClass.test.ts` tests with The Vitest Testing Framework, on the same-named ts class `AnyClass` in this package
- `src/` .ts files 
  - `src/AnyClass.ts` a ts class example with a field, constructor(), get..() and set..() methods examples.
  - `src/index.ts` package's entry point for later imports in other ts packages in ts code as `import { AnyClass } from 'package-name;'`
- `README.md` this .md docs file



## package.json

**Chat GPT Citation**: 
```
"peerDependencies": {
  "lodash": "^4.17.21"
}
peerDependencies means: this package expects lodash to already be installed in the project that uses it.
```



`peerDependencies`, since in this Project are already installed in the root:

- local fs relative path:
```path
workspace/ts/package.json
workspace/ts/node_modules/
```

- dockerized ts service absolute path:
```path
/var/www/workspace/ts/package.json
/var/www/workspace/ts/node_modules/
```



I didn't work lot of time with these libraries, 
however they remain in the net on top of advice,
and I also like they.

I don't use in my packages, due to the first feature of this project, 
`trying not to rely on 3rd parties packages`,
however, in most projects and frameworks they are already pre-installed,
and that is why, normally, a software dev can code with these libs
without additional cost for the aimed project.

I'd like to explain, the `not to rely on 3rd parties packages` I've set to me,
since I wanted to try to keep dependencies tree clean,
and as I see in this moment, 
still the clean dependencies tree was not achieved))

I guess, that even the automation check-n-verify ts package 
and the ts tests package is needed to solve this task.

Like, for sure, all tests work, all packages of my namespace use the latest versions of deps,
have all infrastructure files like package-lock.json, README.md and others,
the package.json confirms the latest rules of the project,
published to the npm repo,
and several others.



### Lodash

1.41 MB

Very nice methods to work with the very base types of data in Javascript.

The Javascript remains to keep thin, and the lodash makes coding easier,
and when looking at methods availbale,
You can solve the coding tasks flow having got known, 
whether what value can be calculated or obtained from the method call. 



### Axios

2.24 MB

The library installed in several frameworks, with very nice methods for loading json.



### Vitest

In this project since several months.
I also set here as a `peerDependency`,
to keep this `Typescript Package Template` standalone reusable also,
since in this package there is a ts test with `The Vitest Testing Framework`.



### Chalk

0.04 MB

The new for me package, remaining in the net on top. Is for the colours in the console. 

I didn't try, but I liked 3rd parties software, writing to console prettified and with effects.

Is installed in this project in the root.

For example, I'd use later either,
with the dynamic import, if installed, 
and the `debug=true` was set in the config of the project or on a ts class instance.


