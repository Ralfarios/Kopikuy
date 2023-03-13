import cx from 'classnames';
import Head from 'next/head';
import Image from 'next/image';

import HeartICO from '@/assets/ico/heart__ico.svg';
import hero_picture from '@/assets/img/hero_cafe.jpg';
import Underline from '@/assets/img/underline.svg';
import { kMenuBeverages, kMenuFoods } from '@/constants/menu';

import s from './styles/home.module.scss';

const HomeView: import('next').NextPage = () => {
  return (
    <>
      <Head>
        <title>Let&apos;s get it done with a cup of coffee at Kopikuy!</title>
        <meta
          name="description"
          content="Kopikuy is a fictional cafe for portfolio purpose."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={s.container}>
        <header className={s.header} id="hero">
          <div className={s.header__background}>
            <Image
              alt="Brown wooden table and chairs - Ruben Ramirez"
              src={hero_picture}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <h1 className={s.header__title}>
            Let&apos;s get it done
            <br />
            with a cup of coffee
            <br />
            at{' '}
            <span className={s['header__title--underline']}>
              Kopikuy
              <Underline
                style={{
                  position: 'absolute',
                  top: '0.6em',
                  width: '100%',
                  height: '100%',
                  left: 0,
                  zIndex: -1,
                }}
              />
            </span>
          </h1>

          <div className={s.header__container__button}>
            <button
              onClick={() => {
                console.log('a');
              }}
              className={s.header__button}>
              About us
            </button>
            <button
              onClick={() => {
                console.log('a');
              }}
              className={cx(s.header__button, s['header__button--link'])}>
              See Our Menu
            </button>
          </div>
        </header>

        <section className={s['section-about']} id="about">
          <div className={s['section-about__image']}>
            <Image
              alt="Brown wooden table and chairs - Ruben Ramirez"
              src={hero_picture}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <h2 className={s['section-about__title']}>A Little About Us</h2>

            <p>
              We are a family-owned café that prides itself on serving delicious
              coffee and fresh, homemade baked goods. Our passion for food and
              drink is reflected in every cup of coffee and every pastry that we
              serve.
            </p>
            <p>
              At our café, we believe that good food and good company go hand in
              hand. That&apos;s why we&apos;ve created a warm and welcoming
              atmosphere where customers can relax, socialize, and enjoy our
              delicious offerings.
            </p>
            <p>
              Our café is also committed to using sustainable and
              locally-sourced ingredients whenever possible. We believe in
              supporting our community and reducing our impact on the
              environment.
            </p>
            <p>
              So whether you&apos;re stopping by for a quick coffee on your way
              to work, or settling in for a leisurely brunch with friends, we
              hope you&apos;ll find that our café feels like a home away from
              home. Come visit us soon and experience the warmth and
              deliciousness that our café has to offer!
            </p>
          </div>
        </section>

        <section className={s['section-menu']} id="menu">
          <h2 className={s['section-menu__title']}>Our Menu</h2>
          <p className={s['section-menu__subtitle']}>
            We have fresh brewed coffee, warm bread and pastry!
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 16,
              marginBlock: '2.5rem',
            }}>
            <div
              style={{ width: 128, height: 1, backgroundColor: '#c0bbaa' }}
            />
            <div
              style={{
                width: 8,
                height: 8,
                backgroundColor: '#c0bbaa',
                borderRadius: 99,
              }}
            />
            <div
              style={{ width: 128, height: 1, backgroundColor: '#c0bbaa' }}
            />
          </div>

          <h5 className={s['section-menu__segments__title']}>Beverages</h5>

          <div className={s['section-menu__segments']}>
            <span></span>
            <span></span>
            <div className={s['section-menu__segments__size']}>M</div>
            <div className={s['section-menu__segments__size']}>L</div>
          </div>

          {kMenuBeverages.map((beverage) => (
            <div
              key={beverage.name}
              className={cx(
                s['section-menu__segments'],
                s['section-menu__segments--body']
              )}>
              {/* <span> */}
              {beverage.isFavorite ? (
                <HeartICO style={{ fontSize: '1em', color: '#AA7145' }} />
              ) : (
                <span />
              )}

              {/* </span> */}
              <span>{beverage.name}</span>
              <div
                className={cx(
                  s['section-menu__segments__content'],
                  s['section-menu__segments__content__center']
                )}>
                {beverage.regularPrice}
              </div>
              <div
                className={cx(
                  s['section-menu__segments__content'],
                  s['section-menu__segments__content__center']
                )}>
                {beverage.largePrice}
              </div>
            </div>
          ))}

          <div style={{ height: '2.5rem' }} />

          <h5 className={s['section-menu__segments__title']}>Foods</h5>

          <div className={s['section-menu__segments']}>
            <span></span>
            <span></span>
            <div className={s['section-menu__segments__size']}>M</div>
            <div className={s['section-menu__segments__size']}>L</div>
          </div>

          {kMenuFoods.map((food) => (
            <div
              key={food.name}
              className={cx(
                s['section-menu__segments'],
                s['section-menu__segments--body']
              )}>
              {/* <span> */}
              {food.isFavorite ? (
                <HeartICO style={{ fontSize: '1em', color: '#AA7145' }} />
              ) : (
                <span />
              )}

              {/* </span> */}
              <span>{food.name}</span>
              <div
                className={cx(
                  s['section-menu__segments__content'],
                  s['section-menu__segments__content__center']
                )}>
                {food.regularPrice}
              </div>
              <div
                className={cx(
                  s['section-menu__segments__content'],
                  s['section-menu__segments__content__center']
                )}>
                {food.largePrice || '-'}
              </div>
            </div>
          ))}

          <p
            style={{
              marginTop: '2.5rem',
              fontSize: '0.75rem',
              textAlign: 'right',
            }}>
            *All prices in thousand rupiah
          </p>
        </section>

        <footer className={s['section-footer']}>
          <div>
            <h5 className={s['section-footer__title']}>
              Sign up for cool promo
            </h5>
            <div className={s['section-footer__input']}>
              <input placeholder="Your email" type="email" />
              <button>Subscribe &#8594;</button>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gap: '1rem',
              gridTemplateColumns: '150px 1fr',
            }}>
            <nav className={s['section-footer__nav']}>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Menu</a>
                </li>
              </ul>
            </nav>
            <div>
              <p>
                <h5 className={s['section-footer__title']}>Visit us!</h5>
                Jl. Apa saja, No. 123, RT.001/003,
                <br />
                Kota Dimana Saja, Jakarta, Indonesia (12345)
              </p>
            </div>
          </div>
        </footer>
        <div
          style={{
            textAlign: 'center',
            backgroundColor: '#c0bbaa',
            fontFamily: 'Playfair Display',
            fontSize: 16,
            fontWeight: 800,
            paddingBlock: 8,
          }}>
          ©Ralfarios - {new Date().getFullYear()}
        </div>
      </main>
    </>
  );
};

export default HomeView;
