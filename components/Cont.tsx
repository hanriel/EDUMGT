import Image from 'next/image'

export default function Cont() {
    return (
            <nav>
                <ul className="navbar-nav align-items-center d-none d-lg-block">
                    <li className="nav-item">
                        <div className="search-box" data-list="{&quot;valueNames&quot;:[&quot;title&quot;]}">
                            <form className="position-relative" data-bs-toggle="search" data-bs-display="static"
                                aria-expanded="false">
                                <input className="form-control search-input fuzzy-search" type="search" placeholder="Поиск..."
                                    aria-label="Search" />
                                <i className="fas fa-search fa-w-16 search-box-icon" aria-hidden="true"></i>
                            </form>
                            <div className="btn-close-falcon-container position-absolute end-0 top-50 translate-middle shadow-none"
                                data-bs-dismiss="search">
                                <div className="btn-close-falcon" aria-label="Close"></div>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
                    <li className="nav-item dropdown">
                        <a className="nav-link notification-indicator notification-indicator-primary px-0 fa-icon-wait"
                            id="navbarDropdownNotification" href="#" role="button" data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            <svg width="16px" className="svg-inline--fa fa-bell fa-w-14" data-fa-transform="shrink-6"
                                aria-hidden="true" focusable="false"
                                data-prefix="fas" data-icon="bell" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512" data-fa-i2svg="">
                                <g transform="translate(224 256)">
                                    <g transform="translate(0, 0)  scale(0.625, 0.625)  rotate(0 0 0)">
                                        <path fill="currentColor"
                                            d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                                            transform="translate(-224 -256)"></path>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-card dropdown-menu-notification"
                            aria-labelledby="navbarDropdownNotification">
                            <div className="card card-notification shadow-none">
                                <div className="card-header">
                                    <div className="row justify-content-between align-items-center">
                                        <div className="col-auto">
                                            <h6 className="card-header-title mb-0">Notifications</h6>
                                        </div>
                                        <div className="col-auto ps-0 ps-sm-3"><a className="card-link fw-normal" href="#">Mark all as
                                                read</a></div>
                                    </div>
                                </div>
                                <div
                                    className="scrollbar-overlay os-host os-theme-dark os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition"
                                    >
                                    <div
                                        className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable os-scrollbar-auto-hidden">
                                        <div className="os-scrollbar-track os-scrollbar-track-off">
                                            <div className="os-scrollbar-handle"></div>
                                        </div>
                                    </div>
                                    <div className="os-scrollbar-corner"></div>
                                </div>
                                <div className="card-footer text-center border-top"><a className="card-link d-block"
                                        href="app/social/notifications.html">View
                                        all</a></div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown"><a className="nav-link pe-0" id="navbarDropdownUser" href="#" role="button"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="avatar avatar-xl">
                                <Image
                                    width={32}
                                    height={32}
                                    className="rounded-circle"
                                    src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d"
                                    alt=""
                                />
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end py-0" aria-labelledby="navbarDropdownUser">
                            <div className="bg-white dark__bg-1000 rounded-2 py-2">
                                <a className="dropdown-item" href="#!">Set status</a>
                                <a className="dropdown-item" href="pages/user/profile.html">Profile &amp; account</a>
                                <a className="dropdown-item" href="#!">Feedback</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="pages/user/settings.html">Settings</a>
                                <a className="dropdown-item" href="pages/authentication/card/logout.html">Logout</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
    )
}