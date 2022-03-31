<template>
  <div id="app" class="split">
    <div id="split-0" class="content">
      A
    </div>
    <div id="split-1" class="content">
      B
      <ul>
        <li>sizes: {{ sizes }} </li>
        <li>gutterSize: {{ gutterSize }} </li>
        <li>minSize: {{ minSize }} </li>
        <li>maxSize: {{ maxSize }} </li>
        <li>cursor: {{ cursor }} </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Split from 'split.js';

export default {
  name: 'App',
  data() {
    return {
      sizes: [20, 80],
      gutterSize: 10,
      minSize: [150, 300],
      maxSize: [350, Infinity],
      cursor: 'col-resize',
    };
  },
  mounted() {
    let sizes = localStorage.getItem('split-sizes')
    if (sizes) {
      sizes = JSON.parse(sizes);
    } else {
      sizes = [20, 80];
    }
    this.sizes = sizes;

    Split(['#split-0', '#split-1'], {
      sizes,
      gutterSize: this.gutterSize,
      minSize: this.minSize,
      maxSize: this.maxSize,
      cursor: this.cursor,
      onDragEnd: function (sizes) {
        localStorage.setItem('split-sizes', JSON.stringify(sizes))
      },
    });
  },
}
</script>

<style>
body {
  height: 100vh;
}
.content {
	padding: 8px;
	border: 1px solid #c0c0c0;
	box-shadow: inset 0 1px 2px #e4e4e4;
	background-color: #fff;
	
	height: 500px;
}
.split {
  display: flex;
  flex-direction: row;
}
.gutter {
  background-color: #eee;
  background-repeat: no-repeat;
  background-position: 50%;
}
.gutter.gutter-horizontal {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
  cursor: col-resize;
}
</style>
