# 레미의 기술블로그 ksbgenius.github.io

## 루비 개발환경 설정

### 의존성 설치

sudo apt-get install ruby-full build-essential zlib1g-dev

### 일반 사용자 계정 설정

echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc  
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc  
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc  
source ~/.bashrc  

### 지킬 설치

gem install jekyll bundler  

---

jekyll new ksbgenius.github.io  
bundle install
bundle exec jekyll serve  
bundle exec jekyll serve --livereload
