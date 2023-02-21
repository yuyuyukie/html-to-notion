"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expectedBlocks = [
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: 'Hey there,', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'Let\'s talk about' } },
                { type: 'text', text: { content: ' Online Courses', link: null } },
                { type: 'text', text: { content: ' .', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: 'What you’ll learn:', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'Who made', link: null } },
                { type: 'text', text: { content: ' $1 million', link: null } },
                { type: 'text', text: { content: ' from a beta course?', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'What should you', link: null } },
                { type: 'text', text: { content: ' teach', link: null } },
                { type: 'text', text: { content: ' ?', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'How to stop', link: null } },
                { type: 'text', text: { content: ' trading time for money', link: null } },
                { type: 'text', text: { content: ' ?', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'What\'s a' } },
                { type: 'text', text: { content: ' value ladder', link: null } },
                { type: 'text', text: { content: ' ?', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'What are the', link: null } },
                { type: 'text', text: { content: ' types', link: null } },
                { type: 'text', text: { content: ' of courses?', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'What are the pros and cons of', link: null } },
                { type: 'text', text: { content: ' cohort-based courses', link: null } },
                { type: 'text', text: { content: ' ?', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '(📈 Pro) What\'s' } },
                { type: 'text', text: { content: ' accountability-as-a-service', link: null } },
                { type: 'text', text: { content: ' ?', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '(📈 Pro) How to build', link: null } },
                { type: 'text', text: { content: ' profitable partnerships', link: null } },
                { type: 'text', text: { content: ' ?', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '(📈 Pro) What are', link: null } },
                { type: 'text', text: { content: ' starter', link: null } },
                { type: 'text', text: { content: ' ,', link: null } },
                { type: 'text', text: { content: ' spotlight', link: null } },
                { type: 'text', text: { content: ' and', link: null } },
                { type: 'text', text: { content: ' signature', link: null } },
                { type: 'text', text: { content: ' courses?', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '(📈 Pro) How are courses being', link: null } },
                { type: 'text', text: { content: ' indirectly monetized', link: null } },
                { type: 'text', text: { content: ' ?', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: { content: '(📈 Pro) What\'s a low-lift way to add' }
                },
                { type: 'text', text: { content: ' massive value', link: null } },
                { type: 'text', text: { content: ' to a course?', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '(📈 Pro) How to avoid', link: null } },
                { type: 'text', text: { content: ' platform risk', link: null } },
                { type: 'text', text: { content: ' ?', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: 'Unlock Trends Pro', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '✅', link: null } },
                { type: 'text', text: { content: ' Access All', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: 'Trends Pro Reports', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '✅', link: null } },
                { type: 'text', text: { content: ' Learn Together', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: 'in our Book Club', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '✅', link: null } },
                { type: 'text', text: { content: ' Stay Accountable', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: 'with Daily Standups', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '✅', link: null } },
                { type: 'text', text: { content: ' Meet Curious Entrepreneurs', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: 'in Weekly Meetups', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '✅', link: null } },
                { type: 'text', text: { content: ' Discuss Reports', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: 'with Domain Experts', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '✅', link: null } },
                { type: 'text', text: { content: ' Collaborate', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'on Upcoming Reports', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' Become a Trends Pro Member',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=a2016b6ee9&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: 'Online Courses', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: '“Self-education is, I firmly believe, the only kind of education there is.”'
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'heading_2',
        heading_2: {
            rich_text: [{ type: 'text', text: { content: '💎 Why It Matters', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'Creators can stop trading time for money by helping students land their first software development jobs, get raises, launch businesses and more.'
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'heading_2',
        heading_2: {
            rich_text: [
                { type: 'text', text: { content: '🔍', link: null } },
                { type: 'text', text: { content: ' Problem', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'There’s a', link: null } },
                { type: 'text', text: { content: ' gap', link: null } },
                {
                    type: 'text',
                    text: { content: ' between where you are and where you want to be.', link: null }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'heading_2',
        heading_2: {
            rich_text: [
                { type: 'text', text: { content: '💡', link: null } },
                { type: 'text', text: { content: ' Solution', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'Online courses are', link: null } },
                { type: 'text', text: { content: ' bridges', link: null } },
                { type: 'text', text: { content: ' that help you fill these gaps.', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: { content: 'You can find your way via trial and error.', link: null }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: { content: 'Or learn from someone who’s done it before.', link: null }
                },
                { type: 'text', text: { content: ' 🏁', link: null } },
                { type: 'text', text: { content: ' Players', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: 'Course Platforms', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'Khan Academy',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=27364ac8eb&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: { content: '• Free online classes for high-school students.', link: null }
                },
                {
                    type: 'text',
                    text: {
                        content: ' Coursera',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=90666c69a3&e=210a6b589e'
                        }
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' • Courses, certificates and degrees from universities and companies.'
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'Egghead',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=29c79ed7ec&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: '• Tutorials for intermediate and advanced developers.', link: null
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' Masterclass',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=5bc3602538&e=210a6b589e'
                        }
                    }
                },
                {
                    type: 'text',
                    text: { content: ' • Edutainment from influential instructors.', link: null }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'Maven',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=9db2881002&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: { content: '• Platform for cohort-based courses.', link: null }
                },
                {
                    type: 'text',
                    text: {
                        content: ' Udemy',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=059c2c95f7&e=210a6b589e'
                        }
                    }
                },
                {
                    type: 'text',
                    text: { content: ' • Marketplace for self-paced courses.', link: null }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'Lynda',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=e6b47ccf73&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: '• Self-paced courses on software development, design, photography and more.'
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' General Assembly',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=786d6e18fd&e=210a6b589e'
                        }
                    }
                },
                {
                    type: 'text',
                    text: { content: ' • Coding, data and design training programs.', link: null }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: 'Tools', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'Podia',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=69524fe01d&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: '• Sell courses, webinars, memberships and other digital products.'
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' Teachable',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=0d0236322e&e=210a6b589e'
                        }
                    }
                },
                {
                    type: 'text',
                    text: { content: ' • Offer online courses and coaching services.', link: null }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'Kajabi',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=dadf23865b&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: '• Host courses, communities, coaching services and more.', link: null
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' Thinkific',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=926c5a3993&e=210a6b589e'
                        }
                    }
                },
                {
                    type: 'text',
                    text: { content: ' • Create online courses and membership sites.', link: null }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'Gumroad',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=1dc55dce7a&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '• Sell digital products.', link: null } },
                { type: 'text', text: { content: ' Courses', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'Produced Services OS',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=173d4751ba&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: { content: '• Learn to build a productized service.', link: null }
                },
                {
                    type: 'text',
                    text: {
                        content: ' The No-Code Beginner’s Course',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=468f3d2d22&e=210a6b589e'
                        }
                    }
                },
                {
                    type: 'text',
                    text: { content: ' • Learn the fundamentals of no-code.', link: null }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'Product Buffs',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=eeda560643&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: '• 5 weeks of hands-on product discovery coaching.', link: null
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' Superpath',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=18b9bc3b73&e=210a6b589e'
                        }
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' • Courses and a community for content marketers.', link: null
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'SQL for Humans',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=ef53babdf9&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '• SQL lessons for developers.', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' Notion Mastery',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=fcaeaa1014&e=210a6b589e'
                        }
                    }
                },
                {
                    type: 'text',
                    text: { content: ' • Use Notion in your life and business.', link: null }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'OKO U',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=8a8f23c29c&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '• Training for “budtenders.”', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' Find Your Niche',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=6fa2cfe488&e=210a6b589e'
                        }
                    }
                },
                { type: 'text', text: { content: ' • Find creator-market fit.', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'Consulting Club',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=a3a271c7a1&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: '• Learn to build a lucrative consulting practice.', link: null
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' Freedom Business',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=2cf5ca52e6&e=210a6b589e'
                        }
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' • Learn to build a sellable business as a solopreneur.', link: null
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'Podcast Like The Pros',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=6155d3c3cb&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: { content: '• Learn to produce high-quality podcasts.', link: null }
                },
                { type: 'text', text: { content: ' 🔮', link: null } },
                { type: 'text', text: { content: ' Predictions', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'More platforms will sponsor influential educators.', link: null
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' Pat Flynn',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=95b0ecf355&e=210a6b589e'
                        }
                    }
                },
                { type: 'text', text: { content: ' did a webinar for', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' Copy.ai',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=887899cfde&e=210a6b589e'
                        }
                    }
                },
                { type: 'text', text: { content: ' . Notion pays', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' Ali Abdaal',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=f0ff9d4269&e=210a6b589e'
                        }
                    }
                },
                { type: 'text', text: { content: ' . Influencers give platforms', link: null } },
                { type: 'text', text: { content: ' documentation', link: null } },
                { type: 'text', text: { content: ' and', link: null } },
                { type: 'text', text: { content: ' distribution', link: null } },
                { type: 'text', text: { content: ' .', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'We’ll see more “edutainers.” Famous teachers have always understood the power of'
                    }
                },
                { type: 'text', text: { content: ' storytelling', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' . See Carl Sagan, Richard Feynman and Neil Degrasse Tyson. Barriers are falling. The best are rising to the top. There are new form factors like'
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' TikTok tutorials',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=2122511a59&e=210a6b589e'
                        }
                    }
                },
                { type: 'text', text: { content: ' .', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'There will be more', link: null } },
                { type: 'text', text: { content: ' interactive, adaptive', link: null } },
                { type: 'text', text: { content: ' platforms like', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' Duolingo',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=e387ff800f&e=210a6b589e'
                        }
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' . They scale personalized, gamified, self-paced education with low marginal costs.'
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'heading_2',
        heading_2: {
            rich_text: [
                { type: 'text', text: { content: '☁️', link: null } },
                { type: 'text', text: { content: ' Opportunities', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: 'Do it live the first time.', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'Build fast feedback loops by consulting before making courses. Build the curriculum from questions, real-world struggles and feedback. Tyler Gillespie'
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' built a few',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=c8563f9c64&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'productized services,', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' mentored founders',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=26a59d718e&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'and now he’s building a', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' course',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=173d4751ba&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '.', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' Presell',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=f84fc6198e&e=210a6b589e'
                        }
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' to reduce market risk. Marie Poulin used presales to get early feedback on the beta version of'
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' her course',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=fcaeaa1014&e=210a6b589e'
                        }
                    }
                },
                { type: 'text', text: { content: ' . Trust', link: null } },
                { type: 'text', text: { content: ' wallets over words', link: null } },
                { type: 'text', text: { content: ' .', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'Base your course on an outcome', link: null } },
                { type: 'text', text: { content: ' .', link: null } },
                { type: 'text', text: { content: ' Use', link: null } },
                { type: 'text', text: { content: ' capstone projects.', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' This is a forcing function to make sure your content is actionable.'
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' Launch MBA',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=25b970c3e5&e=210a6b589e'
                        }
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' is based on the 12 startups in 12 months concept. Each project serves as social proof.'
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: 'Combine', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'courses and', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' communities',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=a76dea17d9&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: '. Get benefits of cohorts (accountability, peer-to-peer learning) at scale without high marginal costs. See all-in-one platforms like'
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' Kajabi',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=dadf23865b&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '.', link: null } },
                { type: 'text', text: { content: ' Build a', link: null } },
                { type: 'text', text: { content: ' value ladder.', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' Help people at different stages and diversify revenue.', link: null
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' Flavio',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=86247d77a4&e=210a6b589e'
                        }
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' does this with his blog (free), books ($), courses ($$) and bootcamps ($$$).'
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: 'Version', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'your course.', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' Paula Pant',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=db644ccdf1&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'earned over $1 million from a', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' “beta” course',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=db644ccdf1&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: '. She’s done multiple versions. Use new versions as launch events.'
                    }
                },
                { type: 'text', text: { content: ' 🔑', link: null } },
                { type: 'text', text: { content: ' Key Lessons', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'These are', link: null } },
                { type: 'text', text: { content: ' fragmented, micro-monopolies', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' . There are many options and many winners. Course creators have'
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' pricing power',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=ff0c97e76a&e=210a6b589e'
                        }
                    }
                },
                {
                    type: 'text',
                    text: { content: ' . Feature parity applies to SaaS not pros.', link: null }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: 'Markets', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'are taking over', link: null } },
                { type: 'text', text: { content: ' .', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'Colleges can’t keep up with talent needs. Companies like', link: null
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' Salesfofce',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=ea37a46529&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'and', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' Google',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=839dd8a191&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: { content: 'take it upon themselves to train employees.', link: null }
                },
                { type: 'text', text: { content: ' Consider tradeoffs:', link: null } },
                { type: 'text', text: { content: ' Cohort-based', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' courses are high-fidelity, boost accountability and have higher completion rates than self-paced courses'
                    }
                },
                { type: 'text', text: { content: ' .', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' But students are kept at the same pace. Like classrooms.'
                    }
                },
                { type: 'text', text: { content: ' Self-paced', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' courses let you move fast or slow. They are more financially accessible than cohort-based courses. But completion rates are lower. Communities can ebb some of these downsides.'
                    }
                },
                { type: 'text', text: { content: ' Interactive platforms', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' adapt to you. They have high engagement and low marginal costs. You may need one-on-one support to fill in gaps.'
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'heading_2',
        heading_2: {
            rich_text: [
                { type: 'text', text: { content: '😠', link: null } },
                { type: 'text', text: { content: ' Haters', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: '“I', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: 'don’t know', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: 'enough to teach a course.”', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: { content: 'What do you wish you knew 3 years ago?', link: null }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'Teach that. You may be better than an expert because you don’t suffer from the expert’s curse. Or teach as you learn. This is what Tim Ferriss, Shane Parrish and I am doing.'
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: '“Most people', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: 'don’t finish', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: 'courses.”', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'The same goes for books and other form factors. Cohorts and interactive, adaptive platforms can help with this.'
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: '“Education should be', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: 'free', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: '.”', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'It is. Get after it. Quality and cost aren’t always correlated. You’ll still have to'
                    }
                },
                { type: 'text', text: { content: ' pay', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: 'attention.', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: '“Course revenue is', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: 'spiky', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: '.”', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'This applies to most digital products. There are ways around it: memberships, value ladders and evergreen funnels. Or embrace the spikiness with open and closed enrollment.'
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: '“Courses are just', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: 'money grabs', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: '.”', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'You can find', link: null } },
                { type: 'text', text: { content: ' bad intentions', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'in any market.', link: null } },
                { type: 'text', text: { content: ' How to avoid it?', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: 'Time', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'is smarter than we are. Be a late adopter and let the chicken come home to roost.'
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' How does this person’s reputation perform over time?', link: null
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'Or look for', link: null } },
                { type: 'text', text: { content: ' reviews', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'in unmoderated environments.', link: null } },
                { type: 'text', text: { content: ' 🔗', link: null } },
                { type: 'text', text: { content: ' Links', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'Who has a course?',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=456e1a32c4&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '• The tweet behind this report.', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' Create Your Online Course Template',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=c8987617de&e=210a6b589e'
                        }
                    }
                },
                {
                    type: 'text',
                    text: { content: ' • A step-by-step process for creating courses.', link: null }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'Interactive Course Platforms',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=51b9f6707b&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '• A tweetstorm on new platforms.', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: 'What else?', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'Trends',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=a2016b6ee9&e=210a6b589e'
                        }
                    }
                },
                {
                    type: 'text',
                    text: {
                        content: ' PRO — Online Courses',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=a2016b6ee9&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'has more insights', link: null } },
                { type: 'text', text: { content: '.', link: null } },
                { type: 'text', text: { content: ' What you’ll get:', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: '24', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'Course Platforms (200% More)', link: null } },
                { type: 'text', text: { content: ' 16', link: null } },
                { type: 'text', text: { content: ' Course Tools (220% More)', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: '28', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'Courses (154% More)', link: null } },
                { type: 'text', text: { content: ' 7', link: null } },
                { type: 'text', text: { content: ' Predictions (133% More)', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: '11', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'Opportunities (83% More)', link: null } },
                { type: 'text', text: { content: ' 6', link: null } },
                { type: 'text', text: { content: ' Key Lessons (100% More)', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: '10', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'Links (233% More)', link: null } },
                { type: 'text', text: { content: ' 24', link: null } },
                { type: 'text', text: { content: ' Related', link: null } },
                { type: 'text', text: { content: ' Reports', link: null } },
                { type: 'text', text: { content: ' (', link: null } },
                { type: 'text', text: { content: ' 📈', link: null } },
                { type: 'text', text: { content: ' Trends Pro Exclusive)', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: '19-minute audio episode', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'with exclusive Online Courses stories, insights and opportunities.'
                    }
                },
                { type: 'text', text: { content: ' With Trends Pro you\'ll learn:' } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: '(', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '📈', link: null } },
                { type: 'text', text: { content: ' Pro)', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'How to', link: null } },
                { type: 'text', text: { content: ' generate recurring revenue', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: { content: 'with online courses? Who is already doing it?', link: null }
                },
                { type: 'text', text: { content: ' (', link: null } },
                { type: 'text', text: { content: ' 📈', link: null } },
                { type: 'text', text: { content: ' Pro)', link: null } },
                { type: 'text', text: { content: ' What\'s' } },
                { type: 'text', text: { content: ' accountability-as-a-service', link: null } },
                { type: 'text', text: { content: ' ?', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: '(', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '📈', link: null } },
                { type: 'text', text: { content: ' Pro)', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'How to build', link: null } },
                { type: 'text', text: { content: ' profitable partnerships', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '?', link: null } },
                { type: 'text', text: { content: ' (', link: null } },
                { type: 'text', text: { content: ' 📈', link: null } },
                { type: 'text', text: { content: ' Pro)', link: null } },
                { type: 'text', text: { content: ' What are', link: null } },
                { type: 'text', text: { content: ' starter', link: null } },
                { type: 'text', text: { content: ' ,', link: null } },
                { type: 'text', text: { content: ' spotlight', link: null } },
                { type: 'text', text: { content: ' and', link: null } },
                { type: 'text', text: { content: ' signature', link: null } },
                { type: 'text', text: { content: ' courses?', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: '(', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '📈', link: null } },
                { type: 'text', text: { content: ' Pro)', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'How are courses being', link: null } },
                { type: 'text', text: { content: ' indirectly monetized', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '?', link: null } },
                { type: 'text', text: { content: ' (', link: null } },
                { type: 'text', text: { content: ' 📈', link: null } },
                { type: 'text', text: { content: ' Pro)', link: null } },
                { type: 'text', text: { content: ' Why do', link: null } },
                { type: 'text', text: { content: ' niches', link: null } },
                { type: 'text', text: { content: ' matter?', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: '(', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '📈', link: null } },
                { type: 'text', text: { content: ' Pro)', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'How to think about', link: null } },
                { type: 'text', text: { content: ' competition', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '?', link: null } },
                { type: 'text', text: { content: ' (', link: null } },
                { type: 'text', text: { content: ' 📈', link: null } },
                { type: 'text', text: { content: ' Pro)', link: null } },
                { type: 'text', text: { content: ' What\'s the future of' } },
                { type: 'text', text: { content: ' free education', link: null } },
                { type: 'text', text: { content: ' ?', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: '(', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '📈', link: null } },
                { type: 'text', text: { content: ' Pro)', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'What\'s a low-lift way to add' } },
                { type: 'text', text: { content: ' massive value', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'to a course?', link: null } },
                { type: 'text', text: { content: ' (', link: null } },
                { type: 'text', text: { content: ' 📈', link: null } },
                { type: 'text', text: { content: ' Pro)', link: null } },
                { type: 'text', text: { content: ' How to avoid', link: null } },
                { type: 'text', text: { content: ' platform risk', link: null } },
                { type: 'text', text: { content: ' ?', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: '(', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '📈', link: null } },
                { type: 'text', text: { content: ' Pro)', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'An inside look into', link: null } },
                { type: 'text', text: { content: ' Ali Abdaal\'s' } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'value ladder and income streams.', link: null } },
                { type: 'text', text: { content: ' and a lot more…', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: 'Unlock Trends Pro', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '✅', link: null } },
                { type: 'text', text: { content: ' Access All', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: 'Trends Pro Reports', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '✅', link: null } },
                { type: 'text', text: { content: ' Learn Together', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: 'in our Book Club', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '✅', link: null } },
                { type: 'text', text: { content: ' Stay Accountable', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: 'with Daily Standups', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '✅', link: null } },
                { type: 'text', text: { content: ' Meet Curious Entrepreneurs', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: 'in Weekly Meetups', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '✅', link: null } },
                { type: 'text', text: { content: ' Discuss Reports', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: 'with Domain Experts', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: '✅', link: null } },
                { type: 'text', text: { content: ' Collaborate', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [{ type: 'text', text: { content: 'on Upcoming Reports', link: null } }]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: 'Become a Trends Pro Member',
                        link: {
                            url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=a2016b6ee9&e=210a6b589e'
                        }
                    }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: 'Thanks,', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: 'Dru Riley', link: null } }] }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'Founder, Trends.vc', link: null } },
                {
                    type: 'text',
                    text: { content: ' Want to change how you receive these emails?', link: null }
                }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'You can', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' update your preferences',
                        link: {
                            url: 'https://trends.us3.list-manage.com/profile?u=5a0620ca3ebb8b31f0c94ed0d&id=7f3f716b5c&e=210a6b589e&c=0b5e797f85'
                        }
                    }
                },
                { type: 'text', text: { content: ' or', link: null } },
                {
                    type: 'text',
                    text: {
                        content: ' unsubscribe',
                        link: {
                            url: 'https://trends.us3.list-manage.com/unsubscribe?u=5a0620ca3ebb8b31f0c94ed0d&id=7f3f716b5c&e=210a6b589e&c=0b5e797f85'
                        }
                    }
                },
                { type: 'text', text: { content: ' .', link: null } }
            ]
        }
    },
    {
        object: 'block',
        type: 'paragraph',
        paragraph: {
            rich_text: [
                { type: 'text', text: { content: 'Our mailing address:', link: null } },
                {
                    type: 'text',
                    text: { content: ' 101 Marietta Street NorthwestAtlanta, GA 30303', link: null }
                }
            ]
        }
    }
];
exports.default = expectedBlocks;
