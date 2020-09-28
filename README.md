# embed-js-img
Mitigating xss

The goal is to embed js in an img tag to

1. execute arbitrary js
2. capture data in the browser context
3. post that data to a remote server

Then find ways of blocking that threat
https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

The img must pass image validation.

- first concern about <img src= is that it does not follow same origin policy
- response header: Content-Type: image/gif https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types

# todos
- [ ] check out https://github.com/jklmnn/imagejs
- [ ] embed js in svg https://security.stackexchange.com/questions/135513/what-could-an-img-src-xss-do/135548
- [ ] embed js in img header https://medium.com/@codedbrain/hiding-js-in-a-jpeg-header-454386f9e20

result:
I can embed js and the img is valid but the js is not executed in the browser
