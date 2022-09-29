<?php
function addStyles() {
    wp_enqueue_style('main-style', '/wp-content/themes/customtheme/css/main.css');
}

add_action('wp_enqueue_scripts', 'addStyles');
