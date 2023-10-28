$(function () {

  //id属性がchange-colorの要素がクリックされたら
  $('#change-color').on('click', function () {
    //文字色を緑にする
    $('#target').css('color', 'green');
  });

  //id属性がchange-textの要素がクリックされたら
  $('#change-text').on('click', function () {
    //文字内容をこんばんは！にする
    $('#target').text('こんばんは！');
  });

  //id属性がfade-outの要素がクリックされたら
  $('#fade-out').on('click', function () {
    //フェードアウトする
    $('#target').fadeOut();
  });

  //id属性がfade-inの要素がクリックされたら
  $('#fade-in').on('click', function () {
    //フェードインする
    $('#target').fadeIn();
  });
});