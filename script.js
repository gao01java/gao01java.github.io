// 푸터 연도 자동 업데이트
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 간단한 포스트 데이터 (나중에 직접 수정 가능)
    const posts = [
        {
            title: "아직 작성된 글 없습니다.",
            date: "2025-11-26",
            category: "null",
            summary: "null",
            tags: ["null"]
        },
        /*
        {
            title: "C++ 부동소수점 출력이 이상한 이유",
            date: "2025-11-25",
            category: "C++",
            summary: "float / double / long double에서 소수점이 이상하게 나오는 이유를 정리해봤습니다.",
            tags: ["C++", "부동소수점", "기초"]
        },
        {
            title: "HTML+CSS+JS로 심리검사 페이지 만들기",
            date: "2025-11-24",
            category: "웹 개발",
            summary: "PHQ-9, 조울증 자가검사 등 간단한 심리검사 페이지를 직접 구현해본 기록.",
            tags: ["HTML", "CSS", "JavaScript"]
        }
            */
    ];

    const postsContainer = document.getElementById("posts-container");

    if (postsContainer) {
        posts.forEach(post => {
            const card = document.createElement("article");
            card.className = "post-card";

            card.innerHTML = `
                <div class="post-meta">${post.date} · ${post.category}</div>
                <h3 class="post-title">${post.title}</h3>
                <p>${post.summary}</p>
                <div class="post-tags"># ${post.tags.join(" · ")}</div>
            `;

            postsContainer.appendChild(card);
        });
    }
});
