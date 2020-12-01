function sayHello() {
  console.log('Hello !')
}

$(() =>
  $('button#say-hello-button').on('click', sayHello)
);
