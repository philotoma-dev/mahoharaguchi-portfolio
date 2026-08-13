
        $(function () {
            const $water = $('.other-bg');
            if (!$water.length) return;

            let ripplesStarted = false;

            const observer = new IntersectionObserver(
                function (entries) {
                    entries.forEach(function (entry) {
                        // 画面内に入ったとき
                        if (entry.isIntersecting && !ripplesStarted) {
                            $water.ripples({
                                resolution: 120,
                                dropRadius: 20,
                                perturbance: 0.03,
                                interactive: true
                            });

                            ripplesStarted = true;

                            // 自動波紋
                            $water.data('rippleTimer', setInterval(function () {
                                const x = Math.random();
                                const y = Math.random();

                                $water.ripples(
                                    'drop',
                                    x,
                                    y,
                                    15,
                                    0.02
                                );
                            }, 1500));
                        }

                        // 画面外に出たとき
                        if (!entry.isIntersecting && ripplesStarted) {
                            clearInterval($water.data('rippleTimer'));
                            $water.ripples('destroy');
                            ripplesStarted = false;
                        }
                    });
                },
                { threshold: 0.1 }
            );

            observer.observe($water[0]);
        });
