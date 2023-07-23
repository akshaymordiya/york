import { useEffect } from "react";
import styles from "./Try2UpdateOriginal.module.css";
const Try2UpdateOriginal = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.try2UpdateOriginal}>
      <div className={styles.hero}>
        <div className={styles.backgroundHero} />
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/cleanshot-20230705-at-0100-1@2x.png"
        />
        <div className={styles.heroText}>
          <p className={styles.moreThanTechnology}>More than technology.</p>
          <p className={styles.moreThanTechnology}>A mindset shift.</p>
        </div>
        <div className={styles.scrollArrow}>
          <img
            className={styles.arrowIcon}
            alt=""
            src="/arrow.svg"
            data-animate-on-scroll
          />
        </div>
        <div className={styles.decoHero2}>
          <b className={styles.aiSaasfuture}>
            <p className={styles.moreThanTechnology}>AI.</p>
            <p className={styles.moreThanTechnology}>
              <span>SaaS.</span>
              <span className={styles.future}>Future</span>
              <span className={styles.span}>.</span>
            </p>
          </b>
        </div>
        <div className={styles.decoHero1}>
          <b className={styles.aiSaasfuture}>
            <p className={styles.moreThanTechnology}>Enhance</p>
            <p className={styles.moreThanTechnology}>
              <span>{`your `}</span>
              <span className={styles.future}>brand</span>
              <span className={styles.span}>.</span>
            </p>
          </b>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuFrame}>
            <div className={styles.aiSaasfuture}>Projects</div>
            <div className={styles.aiSaasfuture}>About us</div>
            <div className={styles.aiSaasfuture}>Contact</div>
          </div>
        </div>
        <img className={styles.yokrLogoIcon} alt="" src="/yokrlogo.svg" />
      </div>
      <div className={styles.scroll2}>
        <div className={styles.goReactNodePythonParent}>
          <b className={styles.aiSaasfuture}>Go. React. Node. Python</b>
          <div
            className={styles.theLanguageThat}
          >{`The Language That Resonates. `}</div>
        </div>
        <div className={styles.goReact}>
          <div className={styles.groupGoReactParent}>
            <div className={styles.groupGoReact}>
              <div className={styles.code}>
                <div className={styles.frameParent}>
                  <div className={styles.cuttingEdgeTechnologyParent}>
                    <b className={styles.cuttingEdgeTechnology}>
                      <p className={styles.moreThanTechnology}>Cutting-Edge</p>
                      <p className={styles.moreThanTechnology}>Technology.</p>
                    </b>
                    <div className={styles.performanceSpeedQuicknessContainer}>
                      <p className={styles.moreThanTechnology}>
                        <b>{`Performance. Speed. Quickness. `}</b>
                      </p>
                      <p
                        className={styles.moreThanTechnology}
                      >{`Optimize your IT architecture. `}</p>
                      <p className={styles.moreThanTechnology}>
                        Skyrocket your performance.
                      </p>
                    </div>
                  </div>
                  <div className={styles.doctypeHtmlHtmlContainer}>
                    <p className={styles.moreThanTechnology}>
                      <span className={styles.createYourProject}>
                        <span className={styles.doctypeHtmlHtmlLang2}>
                          <span className={styles.html}>{`<!`}</span>
                          <span className={styles.doctype}>DOCTYPE</span>
                          <span className={styles.span}>{` `}</span>
                          <span className={styles.html}>{`html>`}</span>
                          <span className={styles.span}>{`      `}</span>
                          <span className={styles.html}>{`<`}</span>
                          <span className={styles.doctype}>html</span>
                          <span className={styles.span}>{` `}</span>
                          <span className={styles.lang}>lang</span>
                          <span className={styles.html}>=</span>
                          <span className={styles.fr}>”fr”</span>
                          <span className={styles.html}>{`>`}</span>
                          <span className={styles.span}>{`      `}</span>
                          <span className={styles.html}>{`<`}</span>
                          <span className={styles.doctype}>head</span>
                          <span className={styles.html}>{`>`}</span>
                          <span className={styles.span}>{`            `}</span>
                          <span className={styles.html}>{`<`}</span>
                          <span className={styles.doctype}>meta</span>
                          <span className={styles.span}>{` `}</span>
                          <span className={styles.lang}>charset</span>
                          <span className={styles.html}>=</span>
                          <span className={styles.fr}>”UTF-8”</span>
                          <span className={styles.html}>{`>`}</span>
                          <span className={styles.span}>{`           `}</span>
                          <span className={styles.html}>{` <`}</span>
                          <span className={styles.doctype}>title</span>
                          <span className={styles.html}>{`>`}</span>
                        </span>
                        <span className={styles.span20}>{` `}</span>
                      </span>
                      <span className={styles.html}>
                        <b className={styles.helloYokr1}>Hello Yokr.</b>
                      </span>
                      <span>
                        <span className={styles.html}>
                          <span className={styles.span22}>{` `}</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span className={styles.html}>{`</`}</span>
                          <span className={styles.doctype}>title</span>
                          <span className={styles.html}>{`>`}</span>
                          <span className={styles.span}>{`   `}</span>
                          <span className={styles.html}>{`   </`}</span>
                          <span className={styles.doctype}>head</span>
                          <span className={styles.html}>{`>      <`}</span>
                          <span className={styles.doctype}>body</span>
                          <span
                            className={styles.html}
                          >{`>            <`}</span>
                          <span className={styles.doctype}>p</span>
                          <span>{`> `}</span>
                        </span>
                        <span>
                          <b className={styles.createYourProject}>
                            Create your project now.
                          </b>
                        </span>
                        <span>
                          <span>{`</`}</span>
                          <span className={styles.doctype}>p</span>
                          <span>{`>  `}</span>
                        </span>
                      </span>
                    </p>
                    <p className={styles.moreThanTechnology}>
                      <span>
                        <span>
                          <span>{`     </`}</span>
                          <span className={styles.doctype}>body</span>
                          <span className={styles.html}>{`> `}</span>
                        </span>
                      </span>
                    </p>
                    <p className={styles.html2}>
                      <span>
                        <span>
                          <span>{`     `}</span>
                          <span className={styles.html}>{`</`}</span>
                          <span className={styles.doctype}>html</span>
                          <span className={styles.html}>{`>`}</span>
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.langages}>
                <div className={styles.languagesFrameworksLibrariParent}>
                  <b className={styles.languagesFrameworksLibrari}>
                    <p
                      className={styles.moreThanTechnology}
                    >{`</Languages.`}</p>
                    <p
                      className={styles.moreThanTechnology}
                    >{`Frameworks. Libraries >`}</p>
                  </b>
                  <div className={styles.goReactNodeContainer}>
                    <p className={styles.moreThanTechnology}>
                      <b>Go. React. Node. Svelte. Python.</b>
                    </p>
                    <p className={styles.moreThanTechnology}>
                      It’s your choice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.backgroundScroll2} />
          </div>
        </div>
      </div>
      <div className={styles.scroll1}>
        <div className={styles.categories}>
          <div className={styles.audit}>
            <b className={styles.aiSaasfuture}>
              <p className={styles.moreThanTechnology}>{`An Audit. `}</p>
              <p className={styles.moreThanTechnology}>Tangible Results.</p>
            </b>
            <div className={styles.adviceAnalysisStrategiesContainer}>
              <p className={styles.moreThanTechnology}>
                <b>{`Advice. Analysis. Strategies. Transformations. `}</b>
              </p>
              <p className={styles.moreThanTechnology}>
                Discover the key elements to propel
              </p>
              <p className={styles.moreThanTechnology}>
                your business forward.
              </p>
            </div>
          </div>
          <div className={styles.agility}>
            <b className={styles.versatilityAgilityExpertisContainer}>
              <p className={styles.moreThanTechnology}>{`Versatility. `}</p>
              <p
                className={styles.moreThanTechnology}
              >{`Agility. Expertise.  `}</p>
            </b>
            <div className={styles.websiteApplicationSaasContainer}>
              <p className={styles.moreThanTechnology}>
                <b>
                  Website. Application. SaaS. Ecommerce. Droshipping. Start-up.
                </b>
              </p>
              <p className={styles.moreThanTechnology}>
                {" "}
                Your Ideas. Our Expertise. One Success.
              </p>
            </div>
          </div>
          <div className={styles.euro}>
            <img
              className={styles.cleanshot20230205At1758}
              alt=""
              src="/cleanshot-20230205-at-1758-1@2x.png"
            />
          </div>
          <div className={styles.design}>
            <div className={styles.frameParent}>
              <img
                className={styles.cleanshot20230206At2135}
                alt=""
                src="/cleanshot-20230206-at-2135-2@2x.png"
              />
              <div className={styles.beautifulDesignEarnedTrustParent}>
                <b className={styles.beautifulDesignEarnedContainer}>
                  <p className={styles.moreThanTechnology}>Beautiful Design.</p>
                  <p className={styles.moreThanTechnology}>Earned Trust.</p>
                </b>
                <div className={styles.ergonomicsDesignUxuiContainer}>
                  <p className={styles.moreThanTechnology}>
                    <b>Ergonomics. Design. UX/UI.</b>
                  </p>
                  <p
                    className={styles.moreThanTechnology}
                  >{`Give your business a new dimension. Invest in your image. `}</p>
                  <p className={styles.moreThanTechnology}>
                    Enhance the user experience. Win new customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.automatisation}>
            <div className={styles.frameGroup}>
              <div className={styles.automatisationProductivityParent}>
                <b className={styles.automatisationProductivityContainer}>
                  <p
                    className={styles.moreThanTechnology}
                  >{`Automatisation. Productivity. `}</p>
                  <p className={styles.moreThanTechnology}>Enhancement.</p>
                </b>
                <div className={styles.nocodeWorkflowsApisContainer}>
                  <p className={styles.moreThanTechnology}>
                    <b>NoCode. Workflows. APIs.</b>
                  </p>
                  <p className={styles.moreThanTechnology}>
                    Automate repetitive tasks.
                  </p>
                  <p className={styles.moreThanTechnology}>
                    Boost your profits.
                  </p>
                </div>
              </div>
              <img
                className={styles.photoAutomatisationIcon}
                alt=""
                src="/photoautomatisation@2x.png"
              />
            </div>
          </div>
          <div className={styles.effect1}>
            <img
              className={styles.cleanshot20230205At1742}
              alt=""
              src="/cleanshot-20230205-at-1742-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.siteSaasEcom}>
        <div className={styles.scroll1Guidance}>
          Guidance. Without Boundaries.
        </div>
        <b className={styles.scroll1SiteAppEcom}>Site. App. eCom. SaaS.</b>
      </div>
      <div className={styles.aiToolsDataContainer}>
        <p className={styles.moreThanTechnology}>AI tools.</p>
        <p className={styles.moreThanTechnology}>Data driven.</p>
        <p className={styles.moreThanTechnology}>Innovation focused.</p>
      </div>
      <div className={styles.footers}>
        <div className={styles.frameContainer}>
          <div className={styles.frame}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
          <div className={styles.loremIpsumCodeContainer}>
            <p
              className={styles.moreThanTechnology}
            >{`Lorem Ipsum: Code, Create, Innovate. `}</p>
            <p className={styles.moreThanTechnology}>
              The Future of Tech is Here.
            </p>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.productsParent}>
              <b className={styles.products}>Products</b>
              <div className={styles.websiteParent}>
                <div className={styles.website}>Website</div>
                <div className={styles.website}>Web applications</div>
                <div className={styles.crypto}>Crypto</div>
              </div>
            </div>
            <div className={styles.productsParent}>
              <b className={styles.products}>{`./>`}</b>
              <div className={styles.websiteParent}>
                <div className={styles.uxui}>UX/UI</div>
                <div className={styles.uxui}>API and SDK</div>
                <div className={styles.startUps}>Start-Ups</div>
              </div>
            </div>
          </div>
          <div className={styles.columns1}>
            <b className={styles.legal}>Legal</b>
            <div className={styles.websiteParent}>
              <div className={styles.uxui}>Méntions Légales</div>
              <div className={styles.uxui}>CGV</div>
              <div className={styles.startUps}>CGU</div>
            </div>
          </div>
        </div>
        <div className={styles.seperator} />
        <div className={styles.copyright2023Yokr}>Copyright ©2023 Yokr</div>
        <div className={styles.footersChild} />
      </div>
    </div>
  );
};

export default Try2UpdateOriginal;
