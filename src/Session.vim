let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
let EasyMotion_hl_move = "EasyMotionMoveHL"
let AutoPairsMapCh =  1 
let EasyMotion_off_screen_search =  1 
let EasyMotion_hl_group_shade = "EasyMotionShade"
let EasyMotion_startofline =  1 
let AutoPairsMapBS =  1 
let EasyMotion_ignore_exception =  0 
let EasyMotion_move_highlight =  1 
let AutoPairsSmartQuotes =  1 
let AutoPairsShortcutBackInsert = "<M-b>"
let EasyMotion_disable_two_key_combo =  0 
let EasyMotion_re_line_anywhere = "\\v(<.|^$)|(.>|^$)|(\\l)\\zs(\\u)|(_\\zs.)|(#\\zs.)"
let AutoPairsLoaded =  1 
let EasyMotion_use_regexp =  1 
let EasyMotion_use_migemo =  0 
let EasyMotion_re_anywhere = "\\v(<.|^$)|(.>|^$)|(\\l)\\zs(\\u)|(_\\zs.)|(#\\zs.)"
let EasyMotion_space_jump_first =  0 
let AutoPairsShortcutToggle = "<M-p>"
let EasyMotion_add_search_history =  1 
let EasyMotion_verbose =  1 
let AutoPairsShortcutFastWrap = "<M-e>"
let AutoPairsMultilineClose =  1 
let EasyMotion_smartcase =  0 
let EasyMotion_force_csapprox =  0 
let EasyMotion_loaded =  1 
let EasyMotion_hl_inc_cursor = "EasyMotionIncCursor"
let AutoPairsMapCR =  1 
let EasyMotion_hl2_first_group_target = "EasyMotionTarget2First"
let AutoPairsShortcutJump = "<M-n>"
let EasyMotion_show_prompt =  1 
let EasyMotion_hl2_second_group_target = "EasyMotionTarget2Second"
let EasyMotion_hl_inc_search = "EasyMotionIncSearch"
let AutoPairsMapSpace =  1 
let EasyMotion_hl_group_target = "EasyMotionTarget"
let EasyMotion_do_shade =  1 
let EasyMotion_use_upper =  0 
let AutoPairsMoveCharacter = "()[]{}\"'"
let EasyMotion_skipfoldedline =  1 
let EasyMotion_do_mapping =  1 
let AutoPairsWildClosedPair = ""
let EasyMotion_grouping =  1 
let AutoPairsCenterLine =  1 
let EasyMotion_landing_highlight =  0 
let EasyMotion_inc_highlight =  1 
let EasyMotion_cursor_highlight =  1 
let EasyMotion_keys = "asdghklqwertyuiopzxcvbnmfj;"
let EasyMotion_enter_jump_first =  0 
let AutoPairsFlyMode =  0 
let EasyMotion_prompt = "Search for {n} character(s): "
silent only
silent tabonly
cd ~/Documents/code/ReactJs/portfolio/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
set shortmess=aoO
badd +38 App.js
badd +30 ~/Documents/code/ReactJs/portfolio/src/index.js
badd +41 ~/Documents/code/ReactJs/portfolio/src/index.sass
badd +20 ~/Documents/code/ReactJs/portfolio/tailwind.config.js
badd +30 ~/Documents/code/ReactJs/portfolio/src/index.scss
badd +7 ~/Documents/code/ReactJs/portfolio/src/components/menu.js
badd +8 ~/Documents/code/ReactJs/portfolio/src/components/skils.js
badd +4 ~/Documents/code/ReactJs/portfolio/src/pages/skils/react.js
badd +0 ~/Documents/code/ReactJs/portfolio/node_modules/@types/react/index.d.ts
badd +0 ~/Documents/code/ReactJs/portfolio/node_modules/@types/react-dom/client.d.ts
badd +0 ~/Documents/code/ReactJs/portfolio/node_modules/react-router/lib/context.d.ts
badd +0 ~/Documents/code/ReactJs/portfolio/node_modules/react-router/lib/components.d.ts
badd +0 ~/Documents/code/ReactJs/portfolio/node_modules/react-router/lib/hooks.d.ts
badd +0 ~/Documents/code/ReactJs/portfolio/node_modules/react-router-dom/index.d.ts
badd +20 ~/Documents/code/ReactJs/portfolio/src/pages/skils/index.js
badd +1 ~/Documents/code/ReactJs/portfolio/src/components/codeItem.js
badd +5 ~/Documents/code/ReactJs/portfolio/src/pages/skils/tailwind.js
badd +4 ~/Documents/code/ReactJs/portfolio/src/pages/skils/description.js
badd +6 ~/Documents/code/ReactJs/portfolio/src/pages/frameworks/index.js
argglobal
%argdel
$argadd App.js
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit App.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 104 + 104) / 208)
exe 'vert 2resize ' . ((&columns * 103 + 104) / 208)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
12,39fold
let &fdl = &fdl
12
normal! zo
let s:l = 44 - ((43 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 44
normal! 0
wincmd w
argglobal
if bufexists(fnamemodify("~/Documents/code/ReactJs/portfolio/src/components/skils.js", ":p")) | buffer ~/Documents/code/ReactJs/portfolio/src/components/skils.js | else | edit ~/Documents/code/ReactJs/portfolio/src/components/skils.js | endif
if &buftype ==# 'terminal'
  silent file ~/Documents/code/ReactJs/portfolio/src/components/skils.js
endif
balt ~/Documents/code/ReactJs/portfolio/src/pages/skils/index.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 4 - ((3 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 4
normal! 09|
wincmd w
exe 'vert 1resize ' . ((&columns * 104 + 104) / 208)
exe 'vert 2resize ' . ((&columns * 103 + 104) / 208)
tabnext
edit ~/Documents/code/ReactJs/portfolio/src/index.js
argglobal
balt ~/Documents/code/ReactJs/portfolio/src/components/skils.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 30 - ((29 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 30
normal! 071|
tabnext
edit ~/Documents/code/ReactJs/portfolio/src/pages/skils/index.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 104 + 104) / 208)
exe 'vert 2resize ' . ((&columns * 103 + 104) / 208)
argglobal
balt ~/Documents/code/ReactJs/portfolio/src/pages/skils/react.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 1 - ((0 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
wincmd w
argglobal
if bufexists(fnamemodify("~/Documents/code/ReactJs/portfolio/src/pages/frameworks/index.js", ":p")) | buffer ~/Documents/code/ReactJs/portfolio/src/pages/frameworks/index.js | else | edit ~/Documents/code/ReactJs/portfolio/src/pages/frameworks/index.js | endif
if &buftype ==# 'terminal'
  silent file ~/Documents/code/ReactJs/portfolio/src/pages/frameworks/index.js
endif
balt ~/Documents/code/ReactJs/portfolio/src/pages/skils/description.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 13 - ((12 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 13
normal! 010|
wincmd w
exe 'vert 1resize ' . ((&columns * 104 + 104) / 208)
exe 'vert 2resize ' . ((&columns * 103 + 104) / 208)
tabnext
edit ~/Documents/code/ReactJs/portfolio/src/index.sass
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 102 + 104) / 208)
exe 'vert 2resize ' . ((&columns * 105 + 104) / 208)
argglobal
balt ~/Documents/code/ReactJs/portfolio/src/index.scss
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 18 - ((17 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 18
normal! 032|
wincmd w
argglobal
if bufexists(fnamemodify("~/Documents/code/ReactJs/portfolio/tailwind.config.js", ":p")) | buffer ~/Documents/code/ReactJs/portfolio/tailwind.config.js | else | edit ~/Documents/code/ReactJs/portfolio/tailwind.config.js | endif
if &buftype ==# 'terminal'
  silent file ~/Documents/code/ReactJs/portfolio/tailwind.config.js
endif
balt ~/Documents/code/ReactJs/portfolio/src/index.scss
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 20 - ((19 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 20
normal! 062|
wincmd w
exe 'vert 1resize ' . ((&columns * 102 + 104) / 208)
exe 'vert 2resize ' . ((&columns * 105 + 104) / 208)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
