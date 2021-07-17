import Link from "next/link";
import React from "react";
import Swiper from "react-id-swiper";
import Image from "next/image";
import { buildUrl } from "cloudinary-build-url";
import * as Styled from "./actors-slider.styles";

const SwiperSlider = ({ actors }) => {
  const params = {
    slidesPerView: 7,
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <Swiper {...params}>
      {actors.map(({ id, first_name, last_name, image }) => {
        const url = buildUrl(image.url, {
          cloud: {
            cloudName: "narimanadam",
          },
          transformations: {
            resize: {
              type: "scale",
            },
          },
        });
        return (
          <div className="swiper-slide">
            <Link href="/actors/[id]" as={`/actors/${id}`}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>
                <Image
                  src={url}
                  alt={`${first_name} ${last_name}`}
                  loading="lazy"
                  className="swiper-lazy"
                  width={205}
                  height={300}
                />
                <Styled.ActorName className="text-white">
                  {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                  {first_name} {last_name}
                </Styled.ActorName>
              </a>
            </Link>
          </div>
        );
      })}
    </Swiper>
  );
};

export const ActorsSlider = ({ actors }) => {
  return (
    <div>
      <Styled.Title>Actors</Styled.Title>
      <SwiperSlider actors={actors} />
    </div>
  );
};

export default ActorsSlider;
