<aside class="col p-3 mx-2-5 text-bg-secondary">
    <?php
        $page = new WP_Query('pagename=yhteystiedot');
        while ($page->have_posts()): $page->the_post();
    ?>
        <h2 class="fw-semibold"><?php the_title(); ?></h2>
    <?php
            the_content();
        endwhile;
        wp_reset_postdata();
    ?>
</aside>