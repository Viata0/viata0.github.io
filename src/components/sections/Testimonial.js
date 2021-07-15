import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Target Users',
    paragraph: 'Anyone can be a User or Worshipper'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <span className="testimonial-item-name text-color-high">DeGrave.io</span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      Users
                    </span>
                
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      User can be anyone who want to create their own grave and store the information like the files(any format) in social media with their grave and hope save money and space for the grave.
                      {/* <ul>
                        <li>
                          Create your own valued online grave with a perfect worshipping system supported
                        </li>
                        <li>
                          Zero fees for creating NFT grave
                        </li>
                        <li>
                          Define scarcity option of NFT grave with KYC and death cert verified
                        </li>
                        <li>
                          Customized and extended preview options for your NFT Grave
                        </li>
                        <li>
                          Receive cryptocurrencies donations through the DeGrave.io platform
                        </li>
                        <li>
                          Purchase digital offerings for the ancestors
                        </li>
                        <li>
                          Display records of worshippers and offerings received
                        </li>
                        <li>
                          Create your own NFT memory collections in any way with support for all file types including 2D and 3D media, audio, video, and more
                        </li>
                        <li>
                          Store private files that only can be unlocked in full for the current owner or appointed users
                        </li>
                        <li>
                          Can leverage tokenized rewards
                        </li>
                        <li>
                          Can leverage blockchain smart contracts to form the trusted layers of the Deathcoin.io platform
                        </li>
                      </ul> */}
                      </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <span className="testimonial-item-name text-color-high">DeGrave.io</span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      Worshippers
                    </span>
                
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      Worshippers can be anyone who want to worship virtually and get and keep the unique memory collections through offerings and donations.
                      {/* <ul>
                        <li>
                          Worship ancestors despite time and space constraints
                        </li>
                        <li>
                          Can trust 100% of NFT graves is belong to the deceased
                        </li>
                        <li>
                          Can preserve unique memory collections through offerings and donations
                        </li>
                        <li>
                          Multiple currency payment options
                        </li>
                        <li>
                          Can leverage tokenized rewards
                        </li>
                        <li>
                          Can leverage blockchain smart contracts to form the trusted layers of the Dealthcoin.io platform
                        </li>
                      </ul> */}
                      </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;