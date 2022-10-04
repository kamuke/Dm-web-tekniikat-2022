<form role="search" method="get" id="searchform" class="d-flex" action="<?php echo home_url('/'); ?>">
    <label class="screen-reader-text" for="s">Haku:</label>
    <input class="form-control me-2" type="search" placeholder="Hae" aria-label="Hae" name="s" id="s" value="<?php the_search_query(); ?>">
    <button class="btn btn-primary" type="submit" id="searchsubmit">Hae</button>
</form>
