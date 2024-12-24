import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { lastValueFrom, Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {

  // @ViewChild('itemSliding') itemSliding!: IonItemSliding;
  posts: any[] = [];
  // posts!: Observable<any>;
  postsSub!: Subscription;
  private http = inject(HttpClient);

  constructor(private router: Router) {
    addIcons({
      add, 
    });
  }

  ngOnInit() {
    this.fetchPosts();
  }

  async fetchPosts(){
    // this.posts = this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
    // this.postsSub = this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe({
    //   next: (data) => {        
    //     this.posts = data;
    //     console.log(this.posts);
    //   },
    //   error: (e) => {
    //     console.log(e);
    //   }
    // });
    try {
      this.posts = await lastValueFrom(this.http.get<any>('https://jsonplaceholder.typicode.com/posts'));
    } catch(e) {
      console.log(e);
    }
  }

  navigateToPost(post: any) {
    console.log(post);
    this.router.navigate(['/', 'tabs', 'tab2', 'posts', post?.id]);
  }

  async createPost() {
    try {
      const result = await lastValueFrom(
        this.http.post<any>('https://jsonplaceholder.typicode.com/posts', {
          title: 'Test post',
          body: 'This is a test post',
          userId: '1',
        })
      );
      console.log(result);

      this.posts = [{...result}, ...this.posts];
    } catch(e) {
      console.log(e);
    }
  }

  async deletePost(post: any, itemSliding: IonItemSliding) {
    try {
      await lastValueFrom(
        this.http.delete<any>(
          `https://jsonplaceholder.typicode.com/posts/${post?.id}`
          )
      );

      itemSliding.close();
      this.posts = this.posts.filter((pst) => pst?.id !== post?.id);
    } catch(e) {
      console.log(e);
    }
  }

  async updatePost(post: any, itemSliding: IonItemSliding, index: number) {
    try {
      const result = await lastValueFrom(
        this.http.patch<any>(`https://jsonplaceholder.typicode.com/posts/${post?.id}`, {
          title: 'Test post',
          body: 'This is a test post',
        })
        // this.http.patch<any>(`https://jsonplaceholder.typicode.com/posts/${post?.id}`, {
        //   title: 'Test post',
        //   body: 'This is a test post',
        //   userId: post?.userId,
        // })
      );
      console.log(result);

      itemSliding.close();

      this.posts[index] = result;
    } catch(e) {
      console.log(e);
    }
  }

  ngOnDestroy() {
    console.log('ngOnDestroy tab2');
    // if(this.postsSub) this.postsSub.unsubscribe();
  }

  trackByFn(index: number, post: any): number {
    return post.id;
  }
}
