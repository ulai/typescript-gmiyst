import * as Phaser from 'phaser';

new Phaser.Game({
  scene: {
    create
  },
  parent: '#app',
  dom: {
    createContainer: true,
    behindCanvas: false
  }
});

function create(this: Phaser.Scene) {
  /*
  const image = this.add.image(200, 300, '');
  this.add.dom(200, 100)
    .createFromHTML(`<input type="file" />`)
    .addListener('change')
    .on('change', (ev) => {
      const file = ev.target.files[0];
      const reader = new FileReader();
      reader.addEventListener('load', (event) => {
        this.textures
          .addBase64('new-image', event.target.result)
          .once(Phaser.Textures.Events.LOAD, () => {
            image.setTexture('new-image');
          });
      });
      reader.readAsDataURL(file);
    });
    */
  this.add.rectangle(10, 10, 20, 20, 0xaabbcc);
}
